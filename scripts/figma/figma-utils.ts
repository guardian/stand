import type {
	GetLocalVariablesResponse,
	LocalVariable,
	RGB,
	RGBA,
	VariableCodeSyntax,
	VariableScope,
} from '@figma/rest-api-spec';

export interface Token {
	/**
	 * The [type](https://tr.designtokens.org/format/#type-0) of the token.
	 *
	 * We allow `string` and `boolean` types in addition to the draft W3C spec's `color` and `number` types
	 * to align with the resolved types for Figma variables.
	 */
	$type: 'color' | 'number' | 'string' | 'boolean' | 'dimension';
	$value: string | number | boolean;
	$description?: string;
	$extensions?: {
		/**
		 * The `com.figma` namespace stores Figma-specific variable properties
		 */
		'com.figma'?: {
			hiddenFromPublishing?: boolean;
			scopes?: VariableScope[];
			codeSyntax?: VariableCodeSyntax;
		};
	};
}

export type TokenOrTokenGroup =
	| Token
	| (Record<string, Token> & { $type?: never; $value?: never });

const Dimensions = ['px', 'em', 'rem'] as const;

const spacingTokens = [
	{
		prefix: 'spacing-',
		replacement: '',
	},
	{
		prefix: 'size-',
		replacement: '',
	},
	{
		prefix: 'corner-radius-',
		replacement: 'corner-',
	},
];
/**
 * Defines what we expect a Design Tokens file to look like in the codebase.
 *
 * This format mostly adheres to the [draft W3C spec for Design Tokens](https://tr.designtokens.org/format/)
 * as of its most recent 24 July 2023 revision except for the $type property, for which
 * we allow `string` and `boolean` values in addition to the spec's `color` and `number` values.
 * We need to support `string` and `boolean` types to align with the resolved types for Figma variables.
 *
 * Additionally, we expect each tokens file to define tokens for a single variable collection and mode.
 * There currently isn't a way to represent modes or themes in the W3C community group design token specification.
 * Once the spec resolves how it wants to treat/handle modes, this code will be updated to reflect the new standard.
 *
 * Follow this discussion for updates: https://github.com/design-tokens/community-group/issues/210
 */
export type TokensFile = Record<string, TokenOrTokenGroup>;

function rgbToHex({ r, g, b, ...rest }: RGB | RGBA) {
	const a = 'a' in rest ? rest.a : 1;

	const toHex = (value: number) => {
		const hex = Math.round(value * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	const hex = [toHex(r), toHex(g), toHex(b)].join('');
	return `#${hex}` + (a !== 1 ? toHex(a) : '');
}

export function tokenTypeFromVariable(variable: LocalVariable) {
	switch (variable.resolvedType) {
		case 'BOOLEAN':
			return 'boolean';
		case 'COLOR':
			return 'color';
		case 'FLOAT':
			if (variable.name.startsWith('weight/')) {
				return 'fontWeight';
			}
			if (
				[
					'letter-spacing/',
					...spacingTokens.map((token) => token.prefix),
				].some((prefix) => variable.name.startsWith(prefix))
			) {
				return 'dimension';
			}
			if (
				Dimensions.some((suffix) =>
					variable.name.endsWith(`-${suffix}`),
				)
			) {
				return 'dimension';
			}
			return 'number';
		case 'STRING':
			if (variable.name.startsWith('family/')) {
				return 'fontFamily';
			}

			return 'string';
	}
}

export function tokenValueFromVariable(
	variable: LocalVariable,
	modeId: string,
	localVariables: Record<string, LocalVariable>,
): Token['$value'] | undefined {
	const value = variable.valuesByMode[modeId];
	if (typeof value === 'object') {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- needed for type narrowing
		if ('type' in value && value.type === 'VARIABLE_ALIAS') {
			const aliasedVariable = localVariables[value.id];
			return `{${aliasedVariable!.name.replace(/\//g, '.')}}`;
		} else if ('r' in value) {
			return rgbToHex(value);
		}

		// eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions -- existing code
		throw new Error(`Format of variable value is invalid: ${value}`);
	} else {
		const dimension =
			typeof value === 'number' &&
			Dimensions.find((suffix) => variable.name.endsWith(`-${suffix}`));
		if (dimension) {
			return `${+value.toFixed(2)}${dimension}`;
		}

		if (
			spacingTokens.some((token) =>
				variable.name.startsWith(token.prefix),
			) &&
			typeof value === 'number'
		) {
			return `${+value.toFixed(2)}px`;
		}

		if (typeof value === 'number') {
			return +Number(value).toFixed(2);
		}

		return value;
	}
}

export function tokenFilesFromLocalVariables(
	localVariablesResponse: GetLocalVariablesResponse,
) {
	const tokenFiles: Record<string, TokensFile> = {};
	const localVariableCollections =
		localVariablesResponse.meta.variableCollections;
	const localVariables = localVariablesResponse.meta.variables;

	Object.values(localVariables).forEach((variable) => {
		// Skip remote variables because we only want to generate tokens for local variables
		if (variable.remote) {
			return;
		}

		const collection =
			localVariableCollections[variable.variableCollectionId];

		collection?.modes.forEach((mode) => {
			//const fileName = `${collection.name}.${mode.name}.json`;
			// We're only using one mode at this point
			const fileName = collection.name;
			// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- TODO: we'll eventually replace this file with our own code
			if (!tokenFiles[fileName]) {
				tokenFiles[fileName] = {};
			}

			let obj = tokenFiles[fileName];

			variable.name.split('/').forEach((groupName) => {
				// Normalise spacing tokens, otherwise the name will have spacing-spacing-X prefix
				const name = (() => {
					for (const token of spacingTokens) {
						if (groupName.startsWith(token.prefix)) {
							return `${groupName.replace(
								token.prefix,
								token.replacement,
							)}-px`;
						}
					}
					return groupName;
				})();
				obj![name] = obj![name] ?? {};
				obj = obj![name] as TokensFile;
			});

			const token = {
				$type: tokenTypeFromVariable(variable),
				$value: tokenValueFromVariable(
					variable,
					mode.modeId,
					localVariables,
				),
			};

			Object.assign(obj!, token);
		});
	});

	return tokenFiles;
}

// From https://github.com/figma/variables-github-action-example

/*

MIT License

Copyright (c) 2023 Figma

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


*/

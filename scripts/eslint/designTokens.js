const namedColours = new Set(
	`aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen`.split(
		/\s+/,
	),
);

const spacingProperty =
	/^(?:(?:margin|padding)(?:-(?:top|right|bottom|left|block(?:-start|-end)?|inline(?:-start|-end)?))?|(?:row-|column-)?gap|space)$/;
const colourProperty =
	/^(?:color|background(?:-(?:color|image))?|border(?:-(?:top|right|bottom|left|block(?:-start|-end)?|inline(?:-start|-end)?))?(?:-color)?|outline(?:-color)?|(?:box|text)-shadow|fill|stroke|(?:caret|accent|text-decoration|text-emphasis|column-rule)(?:-color)?|stop-color|flood-color|lighting-color)$/;

function maskNonValues(value) {
	return value.replace(
		/\/\*[\s\S]*?\*\/|url\([^)]*\)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/gi,
		(match) => ' '.repeat(match.length),
	);
}

function hasLiteralColour(value) {
	const cleaned = maskNonValues(value);
	return (
		/#[\da-f]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\s*\(/i.test(
			cleaned,
		) ||
		(cleaned.match(/[-\w]+/g) ?? []).some((word) =>
			namedColours.has(word.toLowerCase()),
		)
	);
}

function hasLiteralSpacing(value) {
	return [
		...maskNonValues(value).matchAll(
			/(?<![\w-])(-?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(px|r?em|ex|ch|cap|ic|lh|rlh|cm|mm|q|in|pt|pc|(?:[sld]?v)(?:w|h|i|b|min|max)|cq(?:w|h|i|b|min|max))\b/gi,
		),
	].some((match) => Number(match[1]) !== 0);
}

function staticValue(node) {
	if (
		node.type === 'Literal' &&
		['string', 'number'].includes(typeof node.value)
	) {
		return String(node.value);
	}
	if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
		return node.quasis[0].value.cooked ?? node.quasis[0].value.raw;
	}
	if (node.type === 'UnaryExpression' && ['-', '+'].includes(node.operator)) {
		const value = staticValue(node.argument);
		return value !== undefined && !Number.isNaN(Number(value))
			? String(node.operator === '-' ? -Number(value) : Number(value))
			: undefined;
	}
	return undefined;
}

function isNonZeroNumericExpression(node, value) {
	if (node.type === 'Literal' && typeof node.value === 'number') {
		return node.value !== 0;
	}
	return (
		node.type === 'UnaryExpression' &&
		Number.isFinite(Number(value)) &&
		Number(value) !== 0
	);
}

function isDeclarationValue(text) {
	const cleaned = maskNonValues(text);
	const boundary = Math.max(
		cleaned.lastIndexOf(';'),
		cleaned.lastIndexOf('{'),
		cleaned.lastIndexOf('}'),
	);
	return /^\s*[-a-z]+\s*:/i.test(cleaned.slice(boundary + 1));
}

function isEmotionCss(node, sourceCode) {
	const identifier = node.type === 'Identifier' ? node : node.object;
	if (identifier?.type !== 'Identifier') {
		return false;
	}
	let scope = sourceCode.getScope(node);
	while (scope && !scope.set.has(identifier.name)) {
		scope = scope.upper;
	}
	const definition = scope?.set.get(identifier.name)?.defs[0];
	if (
		definition?.type !== 'ImportBinding' ||
		definition.parent.source.value !== '@emotion/react'
	) {
		return false;
	}
	return node.type === 'Identifier'
		? definition.node.type === 'ImportSpecifier' &&
				definition.node.imported.name === 'css'
		: node.type === 'MemberExpression' &&
				!node.computed &&
				node.property.name === 'css' &&
				definition.node.type === 'ImportNamespaceSpecifier';
}

function isStyleObject(node, sourceCode) {
	let current = node;
	while (current.parent) {
		const parent = current.parent;
		if (
			parent.type === 'CallExpression' ||
			parent.type === 'TaggedTemplateExpression'
		) {
			return isEmotionCss(parent.callee ?? parent.tag, sourceCode);
		}
		if (parent.type === 'JSXAttribute') {
			return ['css', 'style'].includes(parent.name.name);
		}
		if (
			![
				'ObjectExpression',
				'Property',
				'ArrayExpression',
				'JSXExpressionContainer',
				'ConditionalExpression',
				'LogicalExpression',
				'ArrowFunctionExpression',
				'TemplateLiteral',
			].includes(parent.type)
		) {
			return false;
		}
		current = parent;
	}
	return false;
}

function createRule(kind) {
	const isColour = kind === 'colour';
	const applies = (property) =>
		(isColour ? colourProperty : spacingProperty).test(property);
	const isLiteral = isColour ? hasLiteralColour : hasLiteralSpacing;
	return {
		meta: {
			type: 'problem',
			docs: {
				description: `Require design tokens instead of hard-coded ${kind} values in component styles.`,
			},
			schema: [],
			messages: {
				literal: `Use a theme/design token instead of the hard-coded ${kind} value for "{{property}}".`,
			},
		},
		create(context) {
			const { sourceCode } = context;
			return {
				TaggedTemplateExpression(node) {
					if (!isEmotionCss(node.tag, sourceCode)) {
						return;
					}
					let text = '';
					const offsets = [];
					const append = (value, start, literal = true) => {
						for (let index = 0; index < value.length; index++) {
							offsets.push(start + (literal ? index : 0));
						}
						text += value;
					};
					node.quasi.quasis.forEach((quasi, index) => {
						append(quasi.value.raw, quasi.range[0] + 1);
						const expression = node.quasi.expressions[index];
						if (expression) {
							const value = staticValue(expression);
							append(
								value ?? (isDeclarationValue(text) ? '__stand_token__' : ';'),
								expression.range[0],
								false,
							);
						}
					});
					const cleaned = maskNonValues(text);
					for (const match of cleaned.matchAll(
						/(?:^|[;{}])\s*([-a-z]+)\s*:\s*([^;{}]*)/gi,
					)) {
						const property = match[1].toLowerCase();
						if (applies(property) && isLiteral(match[2])) {
							const start = offsets[match.index + match[0].indexOf(match[1])];
							context.report({
								node,
								loc: {
									start: sourceCode.getLocFromIndex(start),
									end: sourceCode.getLocFromIndex(start + property.length),
								},
								messageId: 'literal',
								data: { property },
							});
						}
					}
				},
				Property(node) {
					if (node.computed || !isStyleObject(node, sourceCode)) {
						return;
					}
					const key = node.key.name ?? node.key.value;
					if (typeof key !== 'string') {
						return;
					}
					const property = key.replace(
						/[A-Z]/g,
						(letter) => `-${letter.toLowerCase()}`,
					);
					const values =
						node.value.type === 'ArrayExpression'
							? node.value.elements
							: [node.value];
					if (
						applies(property) &&
						values.some((value) => {
							if (!value) {
								return false;
							}
							const literal = staticValue(value);
							return (
								literal !== undefined &&
								(isLiteral(literal) ||
									(!isColour && isNonZeroNumericExpression(value, literal)))
							);
						})
					) {
						context.report({
							node: node.value,
							messageId: 'literal',
							data: { property },
						});
					}
				},
			};
		},
	};
}

export const designTokens = {
	rules: {
		'no-hardcoded-colours': createRule('colour'),
		'no-hardcoded-spacing': createRule('spacing'),
	},
};

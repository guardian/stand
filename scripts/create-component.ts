import fs from 'node:fs';
import readline from 'node:readline';

type NameSet = {
	kebabCase: string;
	pascalCase: string;
	camelCase: string;
};

const SRC_COMPONENTS_PATH = './src/components';
const TOKENS_PATH = './src/styleD/tokens/component';
const SRC_COMPONENT_TEMPLATE_PATH = './src/templates/component';
const TOKEN_TEMPATE_PATH = './src/templates/design-tokens';

const componentFolder = (kebabCasedName: string) =>
	`${SRC_COMPONENTS_PATH}/${kebabCasedName}`;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const getInput = (promptText: string): Promise<string> => {
	return new Promise((resolve) => {
		rl.question(promptText, (answer) => {
			rl.close();
			resolve(answer);
		});
	});
};

// component name casing helpers
const patternToReplaceWithDash = /[^\d\w]+/g;
const tokeniseString = (rawInput: string) =>
	rawInput
		.toLowerCase()
		.replaceAll(patternToReplaceWithDash, '-')
		.split('-')
		.filter((t) => t.length > 0);

const capitalise = (input: string): string =>
	`${(input[0] ?? 'a').toUpperCase()}${input.substring(1)}`;

const decapitalise = (input: string): string =>
	`${(input[0] ?? 'a').toLowerCase()}${input.substring(1)}`;

const toKebabCase = (rawInput: string): string => {
	return tokeniseString(rawInput).join('-');
};
const toPascalCase = (rawInput: string): string => {
	return tokeniseString(rawInput).map(capitalise).join('');
};
const toCamelCase = (rawInput: string): string => {
	return decapitalise(toPascalCase(rawInput));
};

// file system helpers
const getDirContents = (path: fs.PathLike): Promise<string[]> => {
	return new Promise((resolve, reject) => {
		fs.readdir(path, (err, files) => {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	});
};
const createFolder = (path: fs.PathLike): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};
const readFile = (path: fs.PathLike): Promise<string> => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.toString());
			}
		});
	});
};
const writeFile = async (
	path: fs.PathLike,
	contents: string,
): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.writeFile(path, contents, { encoding: 'utf8' }, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

const getComponentTemplateFileNameMap = async (names: NameSet) => {
	const templateFileNames = await getDirContents(SRC_COMPONENT_TEMPLATE_PATH);
	const map: Record<string, string> = {};
	templateFileNames.forEach(
		(fileName) =>
			(map[fileName] = fileName.replace(
				/TemplateComponent/g,
				names.pascalCase,
			)),
	);
	return map;
};

const replaceName = (fileContents: string, names: NameSet): string => {
	fileContents = fileContents.replaceAll(
		/TemplateComponent/g,
		names.pascalCase,
	);
	fileContents = fileContents.replaceAll(/templateComponent/g, names.camelCase);
	fileContents = fileContents.replaceAll(
		/template-component/g,
		names.kebabCase,
	);

	return fileContents;
};

const run = async () => {
	const existingFolders = (await getDirContents(SRC_COMPONENTS_PATH)).filter(
		(name) => !name.endsWith('.tsx'),
	);

	console.log('existing components', existingFolders);

	const input = await getInput('What is your new component called?');
	const names = {
		kebabCase: toKebabCase(input),
		pascalCase: toPascalCase(input),
		camelCase: toCamelCase(input),
	};

	if (existingFolders.includes(names.kebabCase)) {
		return console.error(
			`There is already a "${names.kebabCase}" component folder`,
		);
	}

	console.log(
		`ok! creating the scaffolding for ${names.kebabCase} (${names.pascalCase})...`,
	);

	await createFolder(componentFolder(names.kebabCase));

	const fileMap = await getComponentTemplateFileNameMap(names);

	await Promise.all(
		Object.entries(fileMap).map(
			async ([templateFileName, destinationFileName]) => {
				const srcComponentTemplateContents = await readFile(
					`${SRC_COMPONENT_TEMPLATE_PATH}/${templateFileName}`,
				);
				const contents = replaceName(srcComponentTemplateContents, names);
				const destinationPath = `${componentFolder(names.kebabCase)}/${destinationFileName}`;
				await writeFile(destinationPath, contents);
				console.log('wrote:', destinationPath);
			},
		),
	);

	const tokenDestinationFilename = `${names.camelCase}.json`;
	const tokenTemplateContents = await readFile(
		`${TOKEN_TEMPATE_PATH}/templateComponent.json`,
	);
	const tokenContents = replaceName(tokenTemplateContents, names);
	const tokenFilePath = `${TOKENS_PATH}/${tokenDestinationFilename}`;
	await writeFile(tokenFilePath, tokenContents);
	console.log('wrote:', tokenFilePath);

	console.log(
		`component ${names.pascalCase} generated. To make it available in storybook:`,
	);
	console.log(
		' - add your component to the fileList in ./src/styleD/config.js',
	);
	console.log(' - run `pnpm run build-styled`');

	// TODO - add the component name to the config.js file and run Style dictionary.
	// TODO - add index file to ./src/{name}
	// TODO - add a checklist to publish the component to npm, adding a changelog, updating rollup config, package json and src/index.ts.
};

void run();

import fs from 'node:fs';
import readline from 'node:readline';

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

const createComponentFolder = (name: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.mkdir(`./src/components/${name}`, (err) => {
			if (err) {
				reject(err);
			} else {
				// TO DO
				//  -copy template files and inject name
				// will need to convert from camel-case to PascalCase for file names and component name
				resolve();
			}
		});
	});
};

const run = async () => {
	const existingFolders = (await getDirContents('./src/components')).filter(
		(name) => !name.endsWith('.tsx'),
	);

	console.log('existing compontents', existingFolders);

	const input = await getInput('What is your new component called?');
	const kebabCase = toKebabCase(input);
	const pascalCase = toPascalCase(input);
	const camelCase = toCamelCase(input);

	console.log({ kebabCase, pascalCase, camelCase });

	if (existingFolders.includes(kebabCase)) {
		return console.error(`There is already a "${kebabCase}" component folder`);
	}

	console.log(
		`ok! creating the scaffolding for ${kebabCase} (${pascalCase})...`,
	);

	await createComponentFolder(kebabCase);
	// add index file to ./src/{name}
	// add to rollup and package.json
	// run styledD build
	// update src/index.ts
};

void run();

import fs from 'node:fs';
import readline from 'node:readline';

const COMPONENTS_PATH = './src/components';
const TEMPLATE_PATH = './src/templates/component';
const componentFolder = (kebabCasedName: string) =>
	`${COMPONENTS_PATH}/${kebabCasedName}`;

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

const createComponentFolder = (kebabCasedName: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.mkdir(componentFolder(kebabCasedName), (err) => {
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

const replaceName = (
	fileContents: string,
	name: {
		kebabCase: string;
		pascalCase: string;
		camelCase: string;
	},
): string => {
	fileContents.replaceAll(/TemplateComponent/g, name.pascalCase);
	fileContents.replaceAll(/templateComponent/g, name.camelCase);
	fileContents.replaceAll(/template-component/g, name.kebabCase);

	return fileContents;
};

const run = async () => {
	const existingFolders = (await getDirContents(COMPONENTS_PATH)).filter(
		(name) => !name.endsWith('.tsx'),
	);

	console.log('existing compontents', existingFolders);

	const input = await getInput('What is your new component called?');
	const kebabCase = toKebabCase(input);
	const pascalCase = toPascalCase(input);
	const camelCase = toCamelCase(input);

	if (existingFolders.includes(kebabCase)) {
		return console.error(`There is already a "${kebabCase}" component folder`);
	}

	console.log(
		`ok! creating the scaffolding for ${kebabCase} (${pascalCase})...`,
	);

	await createComponentFolder(kebabCase);

	const names = { kebabCase, pascalCase, camelCase };

	const componentFileContents = await readFile(
		`${TEMPLATE_PATH}/TemplateComponent.tsx`,
	);
	await writeFile(
		`${componentFolder(kebabCase)}/${pascalCase}.tsx`,
		replaceName(componentFileContents, names),
	);

	const typesFileContents = await readFile(`${TEMPLATE_PATH}/types.ts`);
	await writeFile(
		`${componentFolder(kebabCase)}/types.ts`,
		replaceName(typesFileContents, names),
	);

	// add index file to ./src/{name}
	// add to rollup and package.json
	// run styledD build
	// update src/index.ts
};

void run();

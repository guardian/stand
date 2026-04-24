import fs from 'node:fs';
import readline from 'node:readline';

type NameSet = {
	kebabCase: string;
	pascalCase: string;
	camelCase: string;
};

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

const getFilesToCopy = async (names: NameSet) => {
	const templateFileNames = await getDirContents(TEMPLATE_PATH);
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

	const fileMap = await getFilesToCopy(names);

	await Promise.all(
		Object.entries(fileMap).map(
			async ([templateFileName, destinationFileName]) => {
				const templateContents = await readFile(
					`${TEMPLATE_PATH}/${templateFileName}`,
				);
				const contents = replaceName(templateContents, names);
				await writeFile(
					`${componentFolder(kebabCase)}/${destinationFileName}`,
					contents,
				);
				console.log(
					'wrote',
					destinationFileName,
					contents === templateContents,
				);
			},
		),
	);

	// add index file to ./src/{name}
	// add to rollup and package.json
	// run styledD build
	// update src/index.ts
};

void run();

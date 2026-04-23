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

// TO DO - lowercase and dash only
const sanitiseName = (rawInput: string): string => {
	return rawInput.toLowerCase();
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

	const input = await getInput(
		'What is your new component called? (in-kebab-case-please) ',
	);
	const name = sanitiseName(input);

	console.log({ name });

	if (existingFolders.includes(name)) {
		return console.error(`There is already a ${name} component`);
	}

	console.log(`ok! creating the scaffolding for ${name}...`);

	await createComponentFolder(name);
	// add index file to ./src/{name}
	// add to rollup and package.json
	// run styledD build
	// update src/index.ts
};

void run();

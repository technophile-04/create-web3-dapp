import chalk from "chalk";
import fs from "fs";
import path from "path";

export const cleanUpFiles = () => {
	console.log(chalk.yellow("Deleting template files..."));
	fs.rmSync(path.join(process.cwd(), "templates"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "helpers"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "types"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), ".eslintignore"), {
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "contributing.md"), {
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "yarn.lock"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "index.ts"), {
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "interfaces"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "tsconfig.json"), {
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), "images"), {
		recursive: true,
		force: true,
	});
	fs.rmSync(path.join(process.cwd(), ".git"), {
		recursive: true,
	        force: true,
	});
	fs.rmSync(path.join(process.cwd(), "contracts"), {
		recursive: true,
		force: true,
	});
	console.log("Project cleaned up ✅");
};

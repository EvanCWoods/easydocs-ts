import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import getFiles from "./getFiles";
import extractJSDocs from "./extractJSDocs";

/**
 * Generates README content from TypeScript files' JSDocs.
 * @param dir The directory to scan.
 * @returns A string for the README file based on JSDocs and file structure.
 */
const getDocs = (dir: string = process.cwd()): string => {
	const files = getFiles(dir);
	let docCount = 0;
	const totalFiles = files.length;
	const readmeContents: Record<string, string[]> = {};

	files.forEach((file) => {
		const relativePath = path.relative(dir, file);
		const dirPath = path.dirname(relativePath);
		const jsDocs = extractJSDocs(file);

		if (!readmeContents[dirPath]) {
			readmeContents[dirPath] = [];
		}

		const fileLink = `[${path.basename(file)}](${path.relative(
			process.cwd(),
			file,
		)})`;

		if (jsDocs) {
			readmeContents[dirPath].push(`### ${fileLink}\n\n${jsDocs.join("\n\n")}`);
			docCount++;
		} else {
			readmeContents[dirPath].push(
				`### ${fileLink}\n\n\`No documentation available.\``,
			);
		}
	});

	const docCoverage = ((docCount / totalFiles) * 100).toFixed(2);
	let markdownOutput = `# Project Documentation\n\n`;
	markdownOutput += `## Documentation Statistics\n`;
	markdownOutput += `- Total Files: ${totalFiles}\n`;
	markdownOutput += `- Files with Documentation: ${docCount}\n`;
	markdownOutput += `- Documentation Coverage: ${docCoverage}%\n\n`;

	Object.keys(readmeContents).forEach((folder) => {
		markdownOutput += `## Folder: ${folder}\n\n`;
		readmeContents[folder].forEach((content) => {
			markdownOutput += `${content}\n\n`;
		});
	});

	return markdownOutput;
};

export default getDocs;

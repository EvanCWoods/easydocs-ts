"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const getFiles_1 = require("./getFiles");
const extractJSDocs_1 = require("./extractJSDocs");
/**
 * Generates README content from TypeScript files' JSDocs.
 * @param dir The directory to scan.
 * @returns A string for the README file based on JSDocs and file structure.
 */
const getDocs = (dir = process.cwd()) => {
    const files = (0, getFiles_1.default)(dir);
    let docCount = 0;
    const totalFiles = files.length;
    const readmeContents = {};
    files.forEach((file) => {
        const relativePath = path.relative(dir, file);
        const dirPath = path.dirname(relativePath);
        const jsDocs = (0, extractJSDocs_1.default)(file);
        if (!readmeContents[dirPath]) {
            readmeContents[dirPath] = [];
        }
        const fileLink = `[${path.basename(file)}](${path.relative(process.cwd(), file)})`;
        if (jsDocs) {
            readmeContents[dirPath].push(`### ${fileLink}\n\n${jsDocs.join("\n\n")}`);
            docCount++;
        }
        else {
            readmeContents[dirPath].push(`### ${fileLink}\n\n\`No documentation available.\``);
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
exports.default = getDocs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/findAllTsFiles.ts
const fs = require("fs");
const path = require("path");
/**
 * Recursively read all TypeScript files in the directory from where this script is invoked,
 * excluding any directories named 'node_modules'.
 * @param dir The starting directory path, defaults to the current working directory.
 * @param allFiles An array to collect all TypeScript file paths.
 * @returns An array of strings containing paths to all TypeScript files.
 */
const findAllTsFiles = (dir = process.cwd(), allFiles = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            // Skip 'node_modules' directory
            if (!filePath.includes("node_modules")) {
                findAllTsFiles(filePath, allFiles);
            }
        }
        else if ((filePath.endsWith(".ts") && !filePath.endsWith(".d.ts")) ||
            filePath.endsWith(".tsx")) {
            allFiles.push(filePath);
        }
    });
    return allFiles;
};
exports.default = findAllTsFiles;

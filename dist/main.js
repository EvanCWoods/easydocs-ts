#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const getDocs_1 = require("./getDocs"); // Make sure the import path is correct
const main = async () => {
    const readmeContent = (0, getDocs_1.default)(); // Default uses current working directory
    fs.writeFileSync("DOCS.md", readmeContent);
    console.log("README generated successfully.");
};
main();

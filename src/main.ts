#! /usr/bin/env node

import * as fs from "fs";
import getDocs from "./getDocs"; // Make sure the import path is correct

const main = async () => {
	const readmeContent = getDocs(); // Default uses current working directory
	fs.writeFileSync("DOCS.md", readmeContent);
	console.log("README generated successfully.");
};

main();

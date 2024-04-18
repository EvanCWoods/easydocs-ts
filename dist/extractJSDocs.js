"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fs = require("fs");
/**
 * Extract JSDoc comments from a TypeScript file.
 * @param filePath Path to the TypeScript file.
 * @returns The JSDoc comments found or null if none.
 */
const extractJSDocs = (filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(filePath, fileContents, ts.ScriptTarget.Latest, true);
    const jsDocs = [];
    function visit(node) {
        if (node.kind === ts.SyntaxKind.FunctionDeclaration ||
            node.kind === ts.SyntaxKind.VariableStatement) {
            if (node.jsDoc && node.jsDoc.length) {
                node.jsDoc.forEach((doc) => {
                    jsDocs.push(doc.comment || "");
                });
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return jsDocs.length > 0 ? jsDocs : null;
};
exports.default = extractJSDocs;

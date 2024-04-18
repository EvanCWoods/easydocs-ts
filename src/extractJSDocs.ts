import * as ts from "typescript";
import * as fs from "fs";

/**
 * Extract JSDoc comments from a TypeScript file.
 * @param filePath Path to the TypeScript file.
 * @returns The JSDoc comments found or null if none.
 */
const extractJSDocs = (filePath: string): string[] | null => {
	const fileContents = fs.readFileSync(filePath, "utf8");
	const sourceFile = ts.createSourceFile(
		filePath,
		fileContents,
		ts.ScriptTarget.Latest,
		true,
	);
	const jsDocs: string[] = [];

	function visit(node: any): void {
		if (
			node.kind === ts.SyntaxKind.FunctionDeclaration ||
			node.kind === ts.SyntaxKind.VariableStatement
		) {
			if (node.jsDoc && node.jsDoc.length) {
				node.jsDoc.forEach((doc: any) => {
					jsDocs.push(doc.comment || "");
				});
			}
		}
		ts.forEachChild(node, visit);
	}

	visit(sourceFile);
	return jsDocs.length > 0 ? jsDocs : null;
};

export default extractJSDocs;

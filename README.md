# easydocs-ts

`easydocs-ts` is a powerful TypeScript tool that automatically compiles all JSDoc comments across your TypeScript project into a structured README.md file. It's designed to simplify the process of maintaining and presenting documentation, providing clear insights into the coverage and details of your code documentation at a glance.

## Features

- **Automated Documentation Compilation**: Automatically scans all `.ts` files in your project, excluding `node_modules`, to gather JSDoc comments.
- **Detailed Documentation Statistics**: Generates statistics showing the total number of files, the number of files with JSDoc comments, and the documentation coverage percentage.
- **Markdown Formatting**: Outputs a well-organized README.md file with sections based on directories, enhancing readability and navigation.
- **No Configuration Needed**: Works out of the box with zero configuration required for basic usage.

## Installation

Install `easydocs-ts` globally via npm to use it in any TypeScript project:

```bash
npm install -g easydocs-ts
```

## Usage

To generate documentation for your project, simply run easydocs-ts in your project's root directory:

```bash
easydocs-ts
```

This command will generate a README.md file in the current directory, organizing all TypeScript files' JSDoc comments into a readable format.

To run easydocs-ts in a specific directory, or if you're outside of your project directory, specify the path:

```bash
easydocs-ts /path/to/your/typescript/project
```

## Contributing

Contributions to easydocs-ts are always welcome, whether they be feature enhancements, bug fixes, or documentation improvements. If you're interested in helping out:

1. Fork the repository on GitHub.

2. Create a new branch for your changes (git checkout -b feature/YourFeature).

3. Commit your changes (git commit -m 'Add some YourFeature').

4. Push to the branch (git push origin feature/YourFeature).

5. Submit a pull request.

https://github.com/EvanCWoods/easydocs-ts

## License

easydocs-ts is open-sourced software licensed under the MIT license. For more information, please refer to the LICENSE file in the repository.

## Questions or Issues?

For any questions or issues regarding the usage or development of easydocs-ts, please open an issue on the project's GitHub repository.

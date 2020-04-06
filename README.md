# Dependency Cruiser Extension

View the JS dependencies for a file.

![Dependency Report Example](docs/example.png)

## Features

Pick any file, and run `View Dependencies` from the command palette. The extension will generate a Dependency Report and open that in a web View.

![View Dependencies Command](docs/view-dependencies-command.png)

You Can also run the report from the content menu on any files:

![View Dependencies Context Menu](docs/view-dependencies-context.png)

Finally, you can click on each node, to open the file!

## Known Issues

-   `node_modules` folder is currently excluded by default so no dependencies on external libraries will be listed. It is planned for 1.0.0
-   `webpack configuration` is not supported yet. It is planned for 1.0.0

Any other Known issue? We would really appreciate if you can [open a issue](https://github.com/juanallo/vscode-dependency-cruiser/issues).

## Release Notes

### 0.0.1

-   Generate a dependencies report from the command palette or from the context menu
-   Open a dependency by clicking on the node from the report.

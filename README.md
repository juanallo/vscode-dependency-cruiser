# Dependency Cruiser Extension

Check dependencies for any files quick and easy.

![Dependency Report Example](docs/example.png)

## Features

Pick any file, and run `View Dependencies` from the command palette. The extension will generate a Dependency Report and open that in a web View.

![View Dependencies Command](docs/view-dependencies-command.png)

You Can also run the report from the content menu on any files:

![View Dependencies Context Menu](docs/view-dependencies-context.png)

Finally, you can click on each node, to open the file!

### Configuration options:

The extension supports configuration for generating the diagram:

-   **maxDepth**: Define the maximun depth the cruiser will go into dependencies.
-   **layout**: Define the layout the diagram will use to display the tree. Defaults to `dot`
-   **prefix**: Prefix to add to each node URL. For example, you can use this to alllow opening the file in github.
-   **moduleSystems**: Define the module systems to be used. Supported: `['amd', 'cjs', 'es6', 'tsd']`. Defaults to `["amd", "cjs", "es6"]`
-   **tsConfig**: Specify the path for the typescript configuration file. Defaults to `tsconfig.json`

#### Layout Options

There are 7 layout options supported:

-   **dot**: raws directed graphs.
-   **fdp**: draws undirected graphs using a ``spring'' model.
-   **neato**: draws undirected graphs.
-   **osage**: draws clustered graphs.
-   **circo**: draws distributed circular layout around connected nodes.
-   **twopi**: draws graphs using a radial layout.
-   **patchwork**: draws the graph as a squarified treemap.

For more detailed information check the [graphviz manual](https://graphviz.readthedocs.io/en/stable/manual.html#engines). You can also check [graphviz man pages](https://manpages.debian.org/stretch/graphviz/neato.1.en.html).

## Requirements

The extension needs at least Node.js 10.x to run.

## Known Issues

-   `node_modules` folder is currently excluded by default so no dependencies on external libraries will be listed. It is planned for 1.0.0
-   `webpack configuration` is not supported yet. It is planned for 1.0.0

Any other Known issue? We would really appreciate if you can [open a issue](https://github.com/juanallo/vscode-dependency-cruiser/issues).

## Release Notes

### 0.0.1

-   Generate a dependencies report from the command palette or from the context menu
-   Open a dependency by clicking on the node from the report.

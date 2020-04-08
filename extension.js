const vscode = require('vscode')
const runDependencyAnalysis = require('./src/dependencyAnalysis')
const { getFileName, RelativeFilePath } = require('./src/file')
const { openGraph } = require('./src/GraphView')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const dependencyCommand = vscode.commands.registerCommand(
        'extension.dependencyAnalysis',
        async function (file) {
            const filePath =
                RelativeFilePath.fromFile(file) ||
                RelativeFilePath.fromActiveTextEditor()

            const options = vscode.workspace.getConfiguration(
                'dependencyCruiser'
            )

            if (filePath) {
                process.chdir(vscode.workspace.rootPath)
                const graph = await runDependencyAnalysis(filePath, options)

                const fileName = getFileName(filePath)
                return openGraph({
                    vscode,
                    fileName,
                    graph: graph.toString(),
                    context,
                })
            } else {
                vscode.window.showWarningMessage(
                    'No Active Editor tabs, please select a file first'
                )
            }
        }
    )

    context.subscriptions.push(dependencyCommand)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
}

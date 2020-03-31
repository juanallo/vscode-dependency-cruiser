const vscode = require('vscode')
const runDependencyAnalysis = require('./src/dependencyAnalysis')
const { RelativeFilePath } = require('./src/file')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let counter = 1
    const dependencyCommand = vscode.commands.registerCommand(
        'extension.dependencyAnalysis',
        async function (file) {
            const filePath =
                RelativeFilePath.fromFile(file) ||
                RelativeFilePath.fromActiveTextEditor()

            if (filePath) {
                process.chdir(vscode.workspace.rootPath)
                const graph = await runDependencyAnalysis(filePath)

                const panel = vscode.window.createWebviewPanel(
                    `dependency-analysis-${counter++}`,
                    'View Dependencies',
                    vscode.ViewColumn.One,
                    {}
                )

                panel.webview.html = graph.toString()
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

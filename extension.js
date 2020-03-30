const vscode = require('vscode')
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const dependencyCommand = vscode.commands.registerCommand(
        'extension.dependencyCommand',
        function () {}
    )

    context.subscriptions.push(dependencyCommand)

    const dependencyContextMenu = vscode.commands.registerCommand(
        'extension.dependencyContextMenu',
        function () {}
    )

    context.subscriptions.push(dependencyContextMenu)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
}

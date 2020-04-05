const assert = require('assert')

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode')
const myExtension = require('../../extension')
const GraphView = require('../../src/GraphView')

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

suite('Extension Test Suite', function () {
    this.afterEach(async () => {
        await vscode.commands.executeCommand('workbench.action.closeAllEditors')
    })

    test('Check that there are 1 extensions registered', () => {
        const context = {
            subscriptions: [],
        }
        try {
            myExtension.activate(context)
            assert.equal(context.subscriptions.length, 1)
        } finally {
            context.subscriptions.length = 0
        }
    })

    test('Check that the dependencies graph is built', async () => {
        const uri = vscode.Uri.file(`${vscode.workspace.rootPath}/child.js`)
        const document = await vscode.workspace.openTextDocument(uri)
        await vscode.window.showTextDocument(document)

        const panel = await vscode.commands.executeCommand(
            'extension.dependencyAnalysis'
        )
        assert.equal(panel.active, true)
        assert.equal(panel.webview.html.includes('<svg'), true)
    })

    test('Check that the command is not activated if no file open', async () => {
        const panel = await vscode.commands.executeCommand(
            'extension.dependencyAnalysis'
        )
        //panel should not be opened if no file active.
        assert.equal(!!panel, false)
    })

    test('Check that files are opened from dependency graph', async () => {
        GraphView.webViewListener({
            command: 'open',
            url: 'parent.js',
        })

        await sleep(200)
        const openedFileName = vscode.window.activeTextEditor.document.fileName
        assert.equal(openedFileName.includes('parent.js'), true)
    })
})

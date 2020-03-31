const vscode = require('vscode')
const path = require('path')

const getRelativePath = (path) => {
    return path.replace(`${vscode.workspace.rootPath}/`, '')
}

const RelativeFilePath = {
    fromFile(file) {
        if (file) {
            return getRelativePath(file.fsPath)
        }
    },
    fromActiveTextEditor() {
        if (vscode.window.activeTextEditor) {
            return getRelativePath(
                vscode.window.activeTextEditor.document.uri.fsPath
            )
        }
    },
}

module.exports = {
    getFileName(filePath) {
        return path.basename(filePath, path.extname(filePath))
    },
    RelativeFilePath,
}

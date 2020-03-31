module.exports = {
    openGraph({ vscode, fileName, graph }) {
        const panel = vscode.window.createWebviewPanel(
            `dependency-analysis-${Date.now()}`,
            `${fileName} Dependencies`,
            vscode.ViewColumn.One,
            {}
        )

        panel.webview.html = graph
    },
}

const buildView = (title, graph) => {
    return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title${title}</title>
            </head>
            <body>
                ${graph}
            </body>
        </html>
        `
}

module.exports = {
    openGraph({ vscode, fileName, graph }) {
        const title = `${fileName} Dependencies`
        const panel = vscode.window.createWebviewPanel(
            `dependency-analysis-${Date.now()}`,
            title,
            vscode.ViewColumn.One,
            {}
        )

        panel.webview.html = buildView(title, graph)
    },
}

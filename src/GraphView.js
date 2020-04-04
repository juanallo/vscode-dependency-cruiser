const { openFile } = require('./file')
const path = require('path')

const buildView = (title, graph, main) => {
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
                
                <script type="module" src="${main}" ></script>
            </body>
        </html>
        `
}

const webViewListener = (message) => {
    switch (message.command) {
        case 'open':
            openFile(message.url)
            return
    }
}

const createPanel = (vscode, context, title) => {
    return vscode.window.createWebviewPanel(
        `dependency-analysis-${Date.now()}`,
        title,
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(
                    path.join(context.extensionPath, 'src/webViewContext')
                ),
            ],
        }
    )
}

module.exports = {
    openGraph({ vscode, fileName, graph, context }) {
        const title = `${fileName} Dependencies`
        const panel = createPanel(vscode, context, title)

        panel.webview.onDidReceiveMessage(
            webViewListener,
            undefined,
            context.subscriptions
        )

        const onDiskPath = vscode.Uri.file(
            path.join(context.extensionPath, 'src/webViewContext', 'main.js')
        )

        const main = panel.webview.asWebviewUri(onDiskPath)

        panel.webview.html = buildView(title, graph, main)
    },
}

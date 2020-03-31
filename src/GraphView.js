const { openFile } = require('./file')

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

                <script> 
                    const vscode = acquireVsCodeApi();
                    const svg =  document.getElementsByTagName('svg')[0]
                    const links = svg.getElementsByTagName('a')

                    for(let i = 0; i < links.length; i++){
                        const node = links[i]
                        node.addEventListener('click', event => {
                            const url = node.getAttribute('xlink:href')
                            vscode.postMessage({
                                command: 'open',
                                url
                            })
                        })
                    }
                </script>
            </body>
        </html>
        `
}

module.exports = {
    openGraph({ vscode, fileName, graph, context }) {
        const title = `${fileName} Dependencies`
        const panel = vscode.window.createWebviewPanel(
            `dependency-analysis-${Date.now()}`,
            title,
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        )

        panel.webview.onDidReceiveMessage(
            (message) => {
                switch (message.command) {
                    case 'open':
                        openFile(message.url)
                        return
                }
            },
            undefined,
            context.subscriptions
        )

        panel.webview.html = buildView(title, graph)
    },
}

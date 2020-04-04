export const attachSVGLinkHandlers = ({ vscode, document }) => {
    const svg = document.getElementsByTagName('svg')[0]
    const links = svg.getElementsByTagName('a')

    for (let i = 0; i < links.length; i++) {
        const node = links[i]
        node.addEventListener('click', () => {
            const url = node.getAttribute('xlink:href')
            vscode.postMessage({
                command: 'open',
                url,
            })
        })
    }
}

/*global acquireVsCodeApi, document */
import { attachSVGLinkHandlers } from './handlers.js'

function hydrate({ vscode, document }) {
    attachSVGLinkHandlers({ vscode, document })
}

hydrate({
    vscode: acquireVsCodeApi(),
    document,
})

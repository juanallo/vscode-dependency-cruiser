const assert = require('assert')

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode')
const myExtension = require('../../extension')

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.')

    test('Check that there are 2 extensions registered', () => {
        const context = {
            subscriptions: [],
        }
        try {
            myExtension.activate(context)
            assert.equal(context.subscriptions.length, 2)
        } finally {
            context.subscriptions.length = 0
        }
    })
})

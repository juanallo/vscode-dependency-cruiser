const dc = require('../dist/dependencyCruiser.js')
const { Module, render } = require('viz.js/full.render.js')
let Viz = require('viz.js/viz.js')

module.exports = async (path) => {
    const analysis = dc.cruise([path], {
        exclude: 'node_modules/',
        outputType: 'dot',
    })

    return new Viz({ Module, render }).renderString(analysis.output)
}

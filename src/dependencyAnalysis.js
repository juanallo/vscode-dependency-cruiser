const dc = require('dependency-cruiser')
const { Module, render } = require('viz.js/full.render.js')
let Viz = require('viz.js')

module.exports = async (path) => {
    const analysis = dc.cruise([path], {
        exclude: 'node_modules/',
        outputType: 'dot',
    })

    return new Viz({ Module, render }).renderString(analysis.output)
}

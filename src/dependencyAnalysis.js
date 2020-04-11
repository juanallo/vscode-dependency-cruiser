const dc = require('../dist/dependencyCruiser.js')
const { Module, render } = require('viz.js/full.render.js')
let Viz = require('viz.js/viz.js')

module.exports = async (path, options) => {
    const analysis = dc.cruise([path], {
        exclude: 'node_modules/',
        outputType: 'dot',
        maxDepth: options.maxDepth,
        prefix: options.prefix,
        moduleSystems: options.moduleSystems,
    })

    return new Viz({ Module, render }).renderString(analysis.output, {
        engine: options.layout,
    })
}

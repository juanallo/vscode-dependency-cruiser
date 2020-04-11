const dc = require('../dist/dependencyCruiser.js')
const { Module, render } = require('viz.js/full.render.js')
const Viz = require('viz.js/viz.js')
const LayoutMap = require('./options/LayoutMap')

module.exports = async (path, options) => {
    const analysis = dc.cruise([path], {
        exclude: options.exclude,
        outputType: options.outputType,
        maxDepth: options.maxDepth,
        prefix: options.prefix,
        moduleSystems: options.moduleSystems,
        tsConfig: options.tsConfig,
        webpackConfig: options.webpackConfig,
    })

    return new Viz({ Module, render }).renderString(analysis.output, {
        engine: LayoutMap[options.layout],
    })
}

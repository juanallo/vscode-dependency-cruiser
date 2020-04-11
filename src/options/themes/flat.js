module.exports = {
    dot: {
        theme: {
            replace: false,
            graph: {
                bgcolor: 'transparent',
                color: '#2c3e50',
                fontcolor: '#2c3e50',
                fillcolor: 'transparent',
                splines: 'ortho',
            },
            node: {
                color: '#2980b9',
                fillcolor: '#2980b9',
                fontcolor: '#ecf0f1',
            },
            edge: {
                arrowhead: 'vee',
                arrowsize: '0.5',
                penwidth: '1.0',
                color: 'white',
                fontcolor: 'white',
            },
            modules: [
                {
                    criteria: { source: '\\.json$' },
                    attributes: {
                        shape: 'cylinder',
                        fillcolor: '#3498db:#2980b9',
                    },
                },
                {
                    criteria: { coreModule: true },
                    attributes: {
                        color: '#2c3e50',
                        fillcolor: '#95a5a6',
                        fontcolor: '#2c3e50',
                    },
                },
            ],
            dependencies: [
                {
                    criteria: { resolved: '\\.json$' },
                    attributes: { arrowhead: 'obox' },
                },
            ],
        },
    },
}

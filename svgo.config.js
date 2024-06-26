// svgo.config.js
module.exports = {
    multipass: true, // boolean. false by default
    zdatauri: 'unenc', // 'base64' (default), 'enc' or 'unenc'.
    js2svg: {
        indent: 2, // string with spaces or number of spaces. 4 by default
        pretty: true, // boolean, false by default
    },
    plugins: [
        // set of built-in plugins enabled by default
        'preset-default',

        // enable built-in plugins by name
        'prefixIds',

        // or by expanded notation which allows to configure plugin
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical',
            },
        },
        {
            name:'removeAttrs',
            params:{
                attrs: 'data.*'
            }
        },
        {
            name:'removeAttrs',
            params:{
                attrs: 'xmlns'
            }
        },
        {
            name:'removeAttrs',
            params:{
                attrs: 'xml:space'
            }
        },
        {
            name:'convertShapeToPath',
            params:{
                convertArcs: true
            }
        },
    ],
};
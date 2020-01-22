const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            // if add below plugin , the editor background-color is wrong which i wanted is vs-dark theme balck but show white color
            new MonacoEditorPlugin({
                languages: ['text', 'json', 'xml', 'yaml', 'html', 'properties']
            })
        ]
    }
}
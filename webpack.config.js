// importo el modulo de node js
const path = require('path');

module.exports = {
    /*watch: true,
    mode: 'development',
    //Señalo donde esta el archivo de donde voy a tomar los ts
    entry: './src/index.ts',
    module: {
        rules: [
            {
                //aca va una expresion regular, esto quiere decir... con "\.ts" estoy seleccionando los archivos .ts  
                //con el $ digo que ese ".ts" debe estar al final              
                test: /\.ts$/,
                //tenes que tener instalado ts-loader en las dependencias locales
                use: 'ts-loader',
                //aca quiero decirle que solo incluya los archivos que se encuentras en la carpeta src                

            },

        ]
    },

    //Solucion, no me andaban los imports sin esto
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {

        //nombre de archivo de salida con la compilacion, va en formato js
        filename: 'bundle.js',
        //__dirname hace referencia al lugar absoluto donde esta ubicado mis archivos y public es la carpeta de destino, creo un "camino absoluto" entre ambas carpetas
        path: path.resolve(__dirname, 'public')
    }*/

    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }

}
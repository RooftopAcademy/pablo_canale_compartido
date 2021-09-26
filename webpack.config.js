// importo el modulo de node js
const path = require('path');

module.exports = {
    mode: 'development',
    //Señalo donde esta el archivo de donde voy a tomar los ts
    entry: './src/index.ts',
    module:{
        rules: [
            {
                //aca va una expresion regular, esto quiere decir... con "\.ts" estoy seleccionando los archivos .ts  
                //con el $ digo que ese ".ts" debe estar al final              
                test: /\.ts$/,
                //tenes que tener instalado ts-loader en las dependencias locales
                use: 'ts-loader',
                //aca quiero decirle que solo incluya los archivos que se encuentras en la carpeta src                
                include:[path.resolve(__dirname, 'src')]
            },
            
        ]
    },
    devServer:{
        port: 8080,
        static: path.join(__dirname, 'public'),
        open: true,
        hot: true
    },

    //Solucion, no me andaban los imports sin esto
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        
        //nombre de archivo de salida con la compilacion, va en formato js
        filename: 'bundle.js',
        //__dirname hace referencia al lugar absoluto donde esta ubicado mis archivos y public es la carpeta de destino, creo un "camino absoluto" entre ambas carpetas
        path: path.resolve(__dirname, 'public')
    }
}
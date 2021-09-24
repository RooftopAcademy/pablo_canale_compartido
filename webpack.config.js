// importo el modulo de node js
const path = require('path');

module.exports = {
    //Señalo donde esta el archivo de donde voy a tomar los ts
    entry: ['./src/index.ts', './src/CocktailClass.ts', './src/cocktailsDomInit.ts', './src/MessageBoxClass.ts',
'./src/OwnCocktailClass.ts', './src/RegisteredUserClass.ts', './src/toggleMenu.ts', './src/UserClass.ts', './src/ViewClass.ts'],
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
            }
        ]
    },
    output: {
        //nombre de archivo de salida con la compilacion, va en formato js
        filename: 'bundle.js',
        //__dirname hace referencia al lugar absoluto donde esta ubicado mis archivos y public es la carpeta de destino, creo un "camino absoluto" entre ambas carpetas
        path: path.resolve(__dirname, 'public')
    }
}
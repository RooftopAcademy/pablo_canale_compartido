const { response } = require("express");
const express = require("express");
const dotenv = require('dotenv')
const appServer = express();

dotenv.config()

appServer.use(express.json())
appServer.use(express.urlencoded())

let cocktails = [
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipiroshka-1.png', id: '100', amountOfIngredients: 1 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_negroni-1.png', id: '101', amountOfIngredients: 2 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_negroni-1.png', id: '102', amountOfIngredients: 3 },
    { name: 'aperol', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_aperol_spritz-1.png', id: '1003', amountOfIngredients: 2 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipiroshka-1.png', id: '104', amountOfIngredients: 2 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_negroni-1.png', id: '105', amountOfIngredients: 2 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipiroshka-1.png', id: '106', amountOfIngredients: 3 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipiroshka-1.png', id: '104', amountOfIngredients: 1 }

]

let users = [
    { name: 'Juan', pass: '1234', email: 'asd@gmail.com', id: '1' },
    { name: 'Pepito', pass: '12345', email: 'asd1@gmail.com', id: '2' },
    { name: 'Lucas', pass: '123456', email: 'asd2@gmail.com', id: '3' },
    { name: 'Fernanda', pass: '1234567', email: 'asd3@gmail.com', id: '4' },
]

appServer.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

appServer.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT;

appServer.listen(PORT, () => { console.log(`Server Runing on port ${PORT}`) });

appServer.locals.baseUrl = process.env.HOST +

    appServer.get('/api/cocktails', (req, res) => { res.json(cocktails) });

appServer.get('/api/cocktails/:id', (req, res) => {
    const id = Number(req.params.id);
    const cocktail = cocktails.find(cocktail => cocktail.id == id);

    if (cocktail) {
        res.json(cocktail)
    }
    else {
        res.status(404).end();
    }
});

appServer.post('/api/cocktails/', (req, res) => {
    const cocktail = req.body;
    console.log(cocktail)
    if (!cocktail) {
        return res.status(400).json({
            error: 'some error. Salud!'
        })

    }
    cocktails.push(cocktail);

    res.json(cocktail)
})

appServer.delete('/api/cocktails/:id', (req, res) => {
    const id = Number(req.params.id)
    cocktails = cocktails.filter(cocktail => cocktail.id != id);
    res.status(204).end()
    console.log(cocktails)
});


appServer.post('/api/users/', (req, res) => {
    const user = req.body;
    if (!user) {
        return res.status(400).json({
            error: 'vocktail.content is missing'
        })

    }
    cocktails.push(user);

    res.json(user)
})

appServer.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);
    if (user) {
        res.json(user)
    }
    else {
        res.status(404).end();
    }
});
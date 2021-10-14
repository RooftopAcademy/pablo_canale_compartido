const { response } = require("express");
const express = require("express");

const appServer = express();

appServer.use(express.json())

let cocktails = [
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '5', amountOfIngredients: 1 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '1', amountOfIngredients: 2 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '3', amountOfIngredients: 3 },
    { name: 'campari', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '8', amountOfIngredients: 2 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '2', amountOfIngredients: 2 },
    { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '7', amountOfIngredients: 2 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '6', amountOfIngredients: 3 },
    { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '4', amountOfIngredients: 1 }
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

const PORT = 3002;

appServer.listen(3002, () => { console.log(`Server Runing on port ${PORT}`) });



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

appServer.post('/api/cocktails', (req, res) => {
    const cocktail = req.body;
    if (!cocktail || !cocktail.content) {
        return res.status(400).json({
            error: 'vocktail.content is missing'
        })

    }
    res.json(cocktail)
})

appServer.delete('/api/cocktails/:id', (req, res) => {
    const id = Number(req.params.id)
    cocktails = cocktails.filter(cocktail => cocktail.id != id);
    res.status(204).end()
});



appServer.get('/api/users', (req, res) => { res.json(users) });

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
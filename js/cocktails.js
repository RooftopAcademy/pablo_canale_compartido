

class Board {
    constructor() {
        this.users = [];
        this.userInterface = new UserInterface();
        this.actualUser = new User();
        this.cocktails = [];
    }
    getUsers() {
        return this.users;
    }
    getUserInterface() {
        return this.userInterface;
    }
    getActualUser() {
        return this.actualUser;
    };
    setActualUser(user) {
        this.actualUser = user;
    }

    addUser(user) {
        if (user instanceof (RegisteredUser))
            this.users.push(user);
    }
    filterFavorites() {
        const cocktailsToShow = this.cocktails.filter(
            function (cocktail) {
                const favorites = this.actualUser.getFavorites();

                // La funcion find me devuelve un "Cocktail" si lo encuentra, y sino un undefined
                const favFound = favorites.find(
                    function (fav) {
                        return fav.getName() == cocktail.getName()
                    }
                );

                return favFound; // Si favFound es undefined se evaluara como false al retornar. De lo contrario indicara true.
            }
        );
        this.userInterface.showCocktails(cocktailsToShow);
    }
}

class Cocktail {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }

    getIngredients() {
        return this.ingredients;
    }
    getName() {
        return this.name;
    }

}

class User {
    constructor() {
        this.name = '';
        this.pass = null;
    }
}


class RegisteredUser extends User {
    constructor(name, pass) {
        super();
        this.pass = pass;
        this.name = name;
        this.favorites = [];
    }

    getFavorites() {
        return this.favorites;
    }

    getName() {
        return this.name;
    }
    getPass() {
        return this.pass;
    }


    addFavorite(cocktail) {
        if (cocktail instanceof Cocktail)
            this.favorites.push(cocktail)
    }

    deleteFavorite(name) {
        this.getFavorites.forEach(element => {
            if (element.getName == name)
                this.getFavorites.delete(element);
            console.log(this.getFavorites);
        });
    }

}




class UserInterface {
    addCocktail(cocktail) {
        let container = document.getElementById('cards-container');
        let card = document.createElement('div');
        card.classList.add('card');
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container')
        let front = document.createElement('div');
        front.classList.add('card-front');
        let cardText = document.createElement('div');
        cardText.classList.add('card-text', 'flex-column', 'center');
        let textCenter = document.createElement('div');
        textCenter.classList.add('text-center');
        let back = document.createElement('div');
        back.classList.add('card-back', 'text-center');

        let ingredients = cocktail.ingredients;
        textCenter.innerHTML += `<h1>Ingredients</h1>`
        for (let i = 0; i < ingredients.length; i++)
            textCenter.innerHTML += `<p>${ingredients[i]}</p>`;
        console.log(cocktail.getName())
        back.innerHTML += `<h1>${cocktail.getName()}</h1>`;
        /*back.innterHTML += `<img src="./img/${}" />`*/
        cardText.appendChild(textCenter);
        front.appendChild(cardText);
        cardContainer.appendChild(front);
        cardContainer.appendChild(back);
        card.appendChild(cardContainer);

        container.appendChild(card);
    }
    deleteCocktail() {

    }
    showCocktails(cocktails) {
        let cardContainer = document.getElementById('cards-container');
        cardContainer.innerHTML = '';
        cocktails.forEach(cocktail => {
            this.addCocktail(cocktail);
        });
    }

}

/** DOM **/
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.submitter.id == 'btn btn-register') {
        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        let user = new RegisteredUser(name, pass);
        board.addUser(user);
        alert("registrado correctamente");
    }

    if (e.submitter.id == 'btn btn-login') {
        console.log("entor")
        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        for (let i = 0; i < board.getUsers().length; i++) {
            let user = board.getUsers()[i];
            if (user.getName() == name)
                if (user.getPass() == pass) {
                    console.log(user);
                    board.setActualUser(user);
                    console.log(board.getActualUser())
                    document.getElementById('form-cocktail').classList.toggle("hidden-container")
                    alert(`Bienvenido ${user.getName()}!`)
                }
        }

    }

})
document.getElementById('form-cocktail').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('cocktailName').value;
    let ingredients = document.getElementById('ingredients').value;
    let ingredientsArray = ingredients.split(",");
    let cocktail = new Cocktail(name, ingredientsArray);
    board.getUserInterface().addCocktail(cocktail);
})

let stars = document.getElementsByClassName('star');
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function (e) {
        console.log(e)

        //falta ver si el usuario esta registrado
        board.getActualUser().addFavorite();
        //document.getElementsById()//
    })

}



const board = new Board();
let negroni = new Cocktail('Negroni', ['Campario', 'Gin', 'Rosso', 'Orange Dash']);
let oldFashioned = new Cocktail('Old Fashion', ['Whisky', 'Sugar', 'Angostura', 'Orange Dash']);

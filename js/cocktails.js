
////////////////////////////    OBJETS    /////////////////////////////
class Board {
    constructor() {
        this.users = [];
        this.userInterface = new UserInterface();
        this.actualUser = new User();
        this.cocktails = [];
    }
    getCocktails() {
        return this.cocktails;
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

// Class for users that are not login in//
class User {
    constructor() {
        this.name = '';
        this.pass = null;
    }
}

// Registered user can add favorites to board//
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
// This class makes the wiew in HTML//
class UserInterface {
    addCocktail(cocktail) {
        let container = document.getElementById('cards-container');

        // This is a example of cocktail card that I'm creating with the nodes//

        /*<div id="4" class="card">
                            <div class="card-container">
                                <div class="card-front">
                                    <div class="card-text flex-column center">
                                        <div class="text-center">
                                            <h1>Ingredients</h1>
                                            <p>Cachaca</p>
                                            <p>Sugar </p>
                                            <p>Lime wedges</p>
                                            <p>Crushed Ice</p>
                                            <span class="star material-icons-outlined">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-back text-center">
                                    <h1>Caipirinha</h1>
                                    <img src="./img/cocktail_caipirinha-1.png" />
                                </div>
                            </div>
                        </div>
        */
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

        // adding the ingredients to the card
        let ingredients = cocktail.ingredients;
        textCenter.innerHTML += `<h1>Ingredients</h1>`
        for (let i = 0; i < ingredients.length; i++)
            textCenter.innerHTML += `<p>${ingredients[i]}</p>`
        // this is the star for favorites drinks    
        textCenter.innerHTML += `<span id="${cocktail.getName()} class="star material-icons-outlined">star</span>`;

        back.innerHTML += `<h1>${cocktail.getName()}</h1>`;

        // I will add images from the inputs in form-cocktail //
        /*back.innterHTML += `<img src="./img/${}" />`*/
        cardText.appendChild(textCenter);
        front.appendChild(cardText);
        cardContainer.appendChild(front);
        cardContainer.appendChild(back);
        card.appendChild(cardContainer);
        // Here I put it in the container in the html
        container.appendChild(card);


    }
    // Future feature that delete a card from dom//
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

/****************************** DOM ***************************************/

// Listener for login form, register and login buttons//

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.submitter.id == 'btn btn-register') {
        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        let user = new RegisteredUser(name, pass);
        board.addUser(user);
        alert("Congratulations! You are registered");
    }

    if (e.submitter.id == 'btn btn-login') {

        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        for (let i = 0; i < board.getUsers().length; i++) {
            let user = board.getUsers()[i];
            if (user.getName() == name) {
                if (user.getPass() == pass) {
                    board.setActualUser(user);
                    //SE VE CUANDO EL USUARIO ESTA LOGUEADO, AHORA ESTA VISIBLE PPRACTICAR
                    //document.getElementById('form-cocktails').classList.toggle("hidden-container");
                    alert(`Welcome ${user.getName()}!`);
                }
                else
                    alert("Bad Password");
            }
            else
                alert("There is no user with that name");
        }
    }
})

// listener for form-cocktail, add a cocktail with information provided by the inputs//
document.getElementById('form-cocktails').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('cocktailName').value;
    let ingredients = document.getElementById('ingredients').value;
    let ingredientsArray = ingredients.split(",");
    let cocktail = new Cocktail(name, ingredientsArray);
    board.getUserInterface().addCocktail(cocktail);
})

// In development, clicked stars in cards will add cocktail to favorite if the user its registered//
let stars = document.getElementsByClassName('star');
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function (e) {
        if (board.getActualUser() instanceof RegisteredUser) {
            //with this I take the product name from the card
            let productName = e.path[4].getElementsByClassName('card-back')[0].getElementsByTagName('h1')[0].innerText;
            //search for cocktails with that name in the board
            let element = 0;
            while (productName != board.getCocktails()[element].getName()) {
                element++;
            }
            board.getActualUser().addFavorite(board.getCocktails()[element]);
            alert("Added to favorites!");
            console.log(board.getActualUser().getFavorites())
        }
        else
            alert("You should be registered for favorites option");
    })
}


//My board object//

const board = new Board();


//Just for practice// 
let negroni = new Cocktail('Pina Colada', ['White Run', 'Coconut Milk', 'Pineaple Juice', 'Crushed Ice']);
let oldFashioned = new Cocktail('Old Fashion', ['Whisky', 'Sugar', 'Angostura', 'Orange Dash']);

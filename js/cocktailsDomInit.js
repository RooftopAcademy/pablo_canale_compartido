


/****************************** DOM ***************************************/

// Listener for login form, register and login buttons//

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.submitter.id == 'btn-register') {
        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        let user = new RegisteredUser(name, pass);
        bar.addUser(user);
        alert("Congratulations! You are registered");
    }

    if (e.submitter.id == 'btn-login') {

        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        for (let i = 0; i < bar.getUsers().length; i++) {
            let user = bar.getUsers()[i];
            if (user.getName() == name) {
                if (user.getPass() == pass) {
                    bar.setActualUser(user);
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
    let imageUrl = document.getElementById('image').value;
    let id = bar.getCocktails().length + 1;
    let cocktail = new Cocktail(name, ingredientsArray, imageUrl);
    cocktail.setId(id);
    
    bar.addCocktail(cocktail);
})


 


//My bar object//

const bar = new OwnCocktail();


//Just for practice// 
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png    daikiri
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png   pina colada
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png
//  https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png   trop Stawberry
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png  caipi

let pinaColada = new Cocktail('Pina Colada', ['White Run', 'Coconut Milk', 'Pineaple Juice', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png');
let id = bar.getCocktails().length + 1;
pinaColada.setId(id);

let daikiri = new Cocktail('Daikiri', ['White Run', 'Sugar Syrup', 'Lime Juice', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png');
id = bar.getCocktails().length + 1;
daikiri.setId(id);

let ginTonic = new Cocktail('Gin Tonic', ['Gin', 'Lime', 'Tonic', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png');
id = bar.getCocktails().length + 1;
ginTonic.setId(id);

let tropStraw = new Cocktail('Trop Strawberry', ['Strawberry', 'Sugar', 'Pineaple', 'Yogurt', 'Milk', 'Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png');
id = bar.getCocktails().length + 1;
tropStraw.setId(id);

let caipi = new Cocktail('Caipirinha', ['Cachaca', 'Sugar', 'Lime Wedges', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png');
id = bar.getCocktails().length + 1;
caipi.setId(id);

bar.addCocktail(pinaColada);
bar.addCocktail(daikiri);
bar.addCocktail(ginTonic);
bar.addCocktail(tropStraw);
bar.addCocktail(caipi);


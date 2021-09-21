


/****************************** DOM ***************************************/

// Listener for login form, register and login buttons//

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.submitter.id == 'btn-register') {
        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        if( !(name === '') && !(pass === '')){
            let user = new RegisteredUser(name, pass);
            bar.addUser(user);
            bar.getMessageBox().setMessage('Congratulations! You Are Registered');               
            bar.showBox();
        }
        else{
            bar.getMessageBox().setMessage('Usernama And Password Required For Registration');               
            bar.showBox();
        }
    }

    if (e.submitter.id == 'btn-login') {

        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        if( !(name === '') && !(pass === '')){
            if(bar.getUsers().length != 0){
                for (let i = 0; i < bar.getUsers().length; i++) {
                    let user = bar.getUsers()[i];
                    if (user.getName() == name) {
                        if (user.getPass() == pass) {
                            bar.setActualUser(user);
                            //SE VE CUANDO EL USUARIO ESTA LOGUEADO, AHORA ESTA VISIBLE PARA PRACTICAR
                            document.getElementById('form-cocktails').classList.toggle('hidden-container');
                            document.getElementById('login-form').classList.toggle('hidden-container');
                            bar.getMessageBox().setMessage(`Welcome ${user.getName()}!`);                            
                            bar.showBox();                     
                        }
                        else{
                            bar.getMessageBox().setMessage(`Username Or Password Incorrect!`);                           
                            bar.showBox(); 
                            }               
                    }
                    else{
                    bar.getMessageBox().setMessage(`Username Or Password Incorrect!`);                     
                    bar.showBox();  
                    }
                }
            }
            else{
                bar.getMessageBox().setMessage(`No Users Registered`);                     
                bar.showBox();  
            }    
        }
        else{
            bar.getMessageBox().setMessage(`Username And Password Required`);                     
                bar.showBox(); 
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

document.getElementById('btn-favorites').addEventListener('click', function(e){
    if(bar.getActualUser() instanceof (RegisteredUser))
        bar.filterFavorites();
    else{
        bar.getMessageBox().setMessage(`You Should Be Login For Favorite Option`);                     
        bar.showBox(); 
    }    
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
bar.addCocktail(pinaColada);

let daikiri = new Cocktail('Daikiri', ['White Run', 'Sugar Syrup', 'Lime Juice', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png');
id = bar.getCocktails().length + 1;
daikiri.setId(id);
bar.addCocktail(daikiri);

let ginTonic = new Cocktail('Gin Tonic', ['Gin', 'Lime', 'Tonic', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png');
id = bar.getCocktails().length + 1;
ginTonic.setId(id);
bar.addCocktail(ginTonic);

let tropStraw = new Cocktail('Trop Strawberry', ['Strawberry', 'Sugar', 'Pineaple', 'Yogurt', 'Milk', 'Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png');
id = bar.getCocktails().length + 1;
tropStraw.setId(id);
bar.addCocktail(tropStraw);

let caipi = new Cocktail('Caipirinha', ['Cachaca', 'Sugar', 'Lime Wedges', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png');
id = bar.getCocktails().length + 1;
caipi.setId(id);
bar.addCocktail(caipi);



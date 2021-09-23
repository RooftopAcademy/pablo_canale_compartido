


/****************************** DOM ***************************************/

// Listener for login form, register and login buttons//

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.submitter.id == 'btn-register') {
        let name: string = document.getElementById('username').value;
        let pass: number  = document.getElementById('pass').value;
        if( !(name === '') && !(pass === undefined)){
            let user : RegisteredUser = new RegisteredUser();
            user.name = name;
            user.pass = pass;
            bar.addUser(user);
            bar.messageBox.message = 'Congratulations! You Are Registered';               
            bar.showBox();
        }
        else{
            bar.messageBox.message = 'Usernama And Password Required For Registration';               
            bar.showBox();
        }
    }

    if (e.submitter.id == 'btn-login') {

        let name = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;
        if( !(name === '') && !(pass === '')){
            if(bar.users.length != 0){
                // SEGURAMENTE ESTO DE ADEALNTE ESTA MAL, NO DEBERIA LLAMAR A UNA FUNCION GETPASS DESDE ACA, ENCONTRAR UNA FUTURA SOLUCION DESPUES... ZzZzZzzZzZZzzZZ
                for (let i = 0; i < bar.users.length; i++) {
                    let user = bar.users[i];
                    if (user.name == name) {
                        if (user.pass == pass) {
                            bar.actualUser= user;                            
                            document.getElementById('form-cocktails').classList.toggle('hidden-container');
                            document.getElementById('login-form').classList.toggle('hidden-container');
                            bar.messageBox.message= `Welcome ${user.name}!`;                            
                            bar.showBox();                     
                        }
                        else{
                            bar.messageBox.message = `Username Or Password Incorrect!`;                           
                            bar.showBox(); 
                            }               
                    }
                    else{
                    bar.messageBox.message= `Username Or Password Incorrect!`;                     
                    bar.showBox();  
                    }
                }
            }
            else{
                bar.messageBox.message= `No Users Registered`;                     
                bar.showBox();  
            }    
        }
        else{
            bar.messageBox.message= `Username And Password Required`;                     
                bar.showBox(); 
        }
    }
})

// listener for form-cocktail, add a cocktail with information provided by the inputs//
document.getElementById('form-cocktails').addEventListener('submit', function (e) {
    e.preventDefault();
    let name: string = document.getElementById('cocktailName').value;
    let ingredients: string = document.getElementById('ingredients').value;
    let ingredientsArray: string[] = ingredients.split(",");
    let imageUrl: string = document.getElementById('image').value; 
       
    let id: string = (bar.cocktails.length + 1).toString();
    let cocktail: Cocktail= new Cocktail();

    cocktail.name = name;
    cocktail.ingredients = ingredientsArray;
    cocktail.image = imageUrl;
    cocktail.id = id;
    
    bar.addCocktail(cocktail);
})

document.getElementById('btn-favorites').addEventListener('click', function(){
    if(bar.actualUser instanceof (RegisteredUser)){
        bar.filterFavorites();
        document.getElementById('btn-all').classList.toggle('hidden-container');
        document.getElementById('btn-favorites').classList.toggle('hidden-container');
    }
    else{
        bar.messageBox.message = `You Should Be Login For Favorite Option`;                     
        bar.showBox(); 
    }    
})
 
document.getElementById('btn-all').addEventListener('click', function(){
    bar.showCocktails();
    document.getElementById('btn-all').classList.toggle('hidden-container');
    document.getElementById('btn-favorites').classList.toggle('hidden-container');
});

//My bar object//

const bar = new OwnCocktail();


//Just for practice// 
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png    daikiri
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png   pina colada
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png
//  https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png   trop Stawberry
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png  caipi

/* let pinaColada = new Cocktail('Pina Colada', ['White Run', 'Coconut Milk', 'Pineaple Juice', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png');
bar.addCocktail(pinaColada);
let daikiri = new Cocktail('Daikiri', ['White Run', 'Sugar Syrup', 'Lime Juice', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png');
bar.addCocktail(daikiri);
*/
/*let ginTonic = new Cocktail('Gin Tonic', ['Gin', 'Lime', 'Tonic', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png');
bar.addCocktail(ginTonic);

let tropStraw = new Cocktail('Trop Strawberry', ['Strawberry', 'Sugar', 'Pineaple', 'Yogurt', 'Milk', 'Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png');
bar.addCocktail(tropStraw);

let caipi = new Cocktail('Caipirinha', ['Cachaca', 'Sugar', 'Lime Wedges', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png');
bar.addCocktail(caipi);
*/


import App from './entities/App';
import { UserState } from './enum/EnumUserState';
import CocktailList from './entities/CocktailList';
import Sort from './interfaces/SortInterface';
/**
 * This is the application instance
 */
export const app = new App();

window.addEventListener('hashchange', () => {
    app.router.loadPage(window.location.hash)
});

/****************************** DOM ***************************************/
document.getElementsByClassName('arrow-down')[0].addEventListener('click', toggleMenu);

document.getElementsByClassName('arrow-up')[0].addEventListener('click', toggleMenu);

function toggleMenu(): void {
    document.getElementById('ul-btns')?.classList.toggle("show");
}



document.getElementById('btn-favorites')?.addEventListener('click', function () {

    if (app.actualUser.state == UserState.LOG_IN) {
        app.filterFavorites();
        document.getElementById('btn-all')?.classList.toggle('hidden-container');
        document.getElementById('btn-favorites')?.classList.toggle('hidden-container');
    }
    else
        app.showMessage(`You Should Be Login For Favorite Option`);
})

document.getElementById('btn-all')?.addEventListener('click', function () {
    app.showCocktails();
    document.getElementById('btn-all')?.classList.toggle('hidden-container');
    document.getElementById('btn-favorites')?.classList.toggle('hidden-container');
});




//Just for practice// 
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png    daikiri
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png   pina colada
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png
//  https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png   trop Stawberry
// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png  caipi

/* let pinaColada = new Cocktail('Pina Colada', ['White Run', 'Coconut Milk', 'Pineaple Juice', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png');
app.addCocktail(pinaColada);
let daikiri = new Cocktail('Daikiri', ['White Run', 'Sugar Syrup', 'Lime Juice', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png');
app.addCocktail(daikiri);
*/
/*let ginTonic = new Cocktail('Gin Tonic', ['Gin', 'Lime', 'Tonic', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png');
app.addCocktail(ginTonic);

let tropStraw = new Cocktail('Trop Strawberry', ['Strawberry', 'Sugar', 'Pineaple', 'Yogurt', 'Milk', 'Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png');
app.addCocktail(tropStraw);

let caipi = new Cocktail('Caipirinha', ['Cachaca', 'Sugar', 'Lime Wedges', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png');
app.addCocktail(caipi);
*/


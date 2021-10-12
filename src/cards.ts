import { app } from "./index";
import { UserState } from "./enum/EnumUserState";
import Cocktail from "./interfaces/CocktailInterface";


/**
 * TODO Only registered Users Can delete cocktails
 * @param element 
 */
export function deleteCard(element: HTMLElement) {
    if (app.actualUser.state == UserState.LOG_IN)
        app.deleteCocktail(element.id);
}

/**
 * TODO Wanna save an Id of the cocktail, not the object...
 * @param element 
 */

export function addFavorite(event: Event) {
    if (app.actualUser.state == UserState.LOG_IN) {
        console.log(event)/*

    const cocktailFavorite: Cocktail = app.cocktailFromId(element.id);
    app.actualUser.addFavorite(cocktailFavorite);
    app.showMessage(`${cocktailFavorite.name} Added to Favorites`);
    */
    }
}
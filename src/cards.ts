import { bar } from ".";
import { UserState } from "./enum/EnumUserState";
import Cocktail from "./interfaces/CocktailInterface";


/**
 * TODO Only registered Users Can delete cocktails
 * @param element 
 */
export function deleteCard(element: HTMLElement) {
    if (bar.actualUser.state == UserState.LOG_IN)
        bar.deleteCocktail(element.id);
}

/**
 * TODO Wanna save an Id of the cocktail, not the object...
 * @param element 
 */

export function addFavorite(event: Event) {
    if (bar.actualUser.state == UserState.LOG_IN) {
        console.log(event)/*

    const cocktailFavorite: Cocktail = bar.cocktailFromId(element.id);
    bar.actualUser.addFavorite(cocktailFavorite);
    bar.showMessage(`${cocktailFavorite.name} Added to Favorites`);
    */
    }
}
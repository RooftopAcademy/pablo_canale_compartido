import { app } from "../index";
import { UserState } from "../enum/EnumUserState";
import Cocktail from "../interfaces/CocktailInterface";


/**
 * TODO Only registered Users Can delete cocktails
 * @param element 
 */
export function deleteCard(event: PointerEvent) {
    const eventT = event.target as Element
    if (app.actualUser.state == UserState.LOG_IN) {
        const id = eventT.id
        app.deleteCocktail(id);
    }

}

/**
 * TODO Wanna save an Id of the cocktail, not the object...
 * @param element 
 */

export function addFavorite(event: Event) {
    const eventT = event.target as Element
    if (app.actualUser.state == UserState.LOG_IN) {
        const id = eventT.id
        const cocktailFavorite: Cocktail = app.cocktailFromId(id);
        console.log(cocktailFavorite)
        app.actualUser.addFavorite(cocktailFavorite);
        app.showMessage(`${cocktailFavorite.name} Added to Favorites`);

    }
}
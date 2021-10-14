import { app } from "../index";
import Cocktail from "../interfaces/CocktailInterface";

export default class CocktailService {

    private readonly _urlApi: string = 'http://localhost:3002/api/cocktails';

    get urlApi() {
        return this._urlApi;
    }

    async postCocktailApi(cocktail: Cocktail) {
        try {
            let res: Response = await fetch(`${this._urlApi}/${cocktail.id}`, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(cocktail)
            });
        }
        catch (e) {
            app.showMessage(`Error postCocktail: ${e}`);
        }
    }

    async getCocktailsApi() {

        let cocktails: Cocktail[] = [];

        try {
            let res: Response = await fetch(`${this._urlApi}`);

            if (res.ok)
                cocktails = await res.json();
        }
        catch (e) {
            app.showMessage(`Error getCocktails: ${e}`);
        }
        return cocktails;
    }

    async deleteCocktailApi(id: string) {
        try {
            let res = await fetch(`${this._urlApi}/${id}`, {
                "method": "DELETE"
            });
        }
        catch (e) {
            app.showMessage(`Error deleteCocktail: ${e}`);;
        }
    }
}
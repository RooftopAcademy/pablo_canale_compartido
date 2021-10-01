import { bar } from "../index";
import Cocktail from "../interfaces/CocktailInterface";

export default class CocktailService {

    private readonly _urlApi: string = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/';

    get urlApi() {
        return this._urlApi;
    }

    async postCocktailApi(cocktail: Cocktail) {
        try {
            let res: Response = await fetch(`${this._urlApi}Cocktail`, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(cocktail)
            });
        }
        catch (e) {
            bar.showMessage(`Error postCocktail: ${e}`);
        }
    }

    async getCocktailsApi() {

        let cocktails: Cocktail[] = [];

        try {
            let res: Response = await fetch(`${this._urlApi}Cocktail`);

            if (res.ok)
                cocktails = await res.json();
        }
        catch (e) {
            bar.showMessage(`Error getCocktails: ${e}`);
        }
        return cocktails;
    }

    async deleteCocktailApi(id: string) {
        try {
            let res = await fetch(`${this._urlApi}Cocktail/${id}`, {
                "method": "DELETE"
            });
        }
        catch (e) {
            bar.showMessage(`Error deleteCocktail: ${e}`);;
        }
    }
}
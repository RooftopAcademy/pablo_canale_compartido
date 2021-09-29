import Cocktail from "./CocktailInterface";
import { bar } from "./index";

export default class CocktailService {
    addCocktailApi(cocktail: Cocktail) {
        throw new Error('Method not implemented.');
    }

    private readonly _urlApi: string = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/';


    async postCocktailApi(cocktail: Cocktail) {
        try {
            let res: Response = await fetch(`${this._urlApi}Cocktail`, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(cocktail)
            });
            if (res.ok)
                bar.cocktails = await this.getCocktailsApi();
        }
        catch (e) {
            alert("ERROR CATCH POST USER")
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
            alert("ERROR CATCH GET COCKTAILS");
        }
        return cocktails;
    }

    async deleteCocktailApi(id: string) {
        try {
            let res = await fetch(`${this._urlApi}Cocktail/${id}`, {
                "method": "DELETE"
            });
            if (res.ok)
                bar.cocktails = await this.getCocktailsApi();
        }
        catch (e) {
            alert("ERROR CATH DELETE COCKTAIL");
        }
    }

}
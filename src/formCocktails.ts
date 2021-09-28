import Cocktail from "./CocktailInterface";
import { bar } from "./index";


export default function addCocktail(event: Event ): void{
    event.preventDefault();
    // listener for form-cocktail, add a cocktail with information provided by the inputs//

    let name: string = (<HTMLInputElement>document.getElementById('cocktailName')).value;
    let ingredients: string = (<HTMLInputElement>document.getElementById('ingredients')).value;
    let ingredientsArray: string[] = ingredients.split(",");
    let imageUrl: string = (<HTMLInputElement>document.getElementById('image')).value;     
    let id: string = (bar.cocktails.length + 1).toString();
    
    let cocktail: Cocktail ={
        name: name,
        ingredients: ingredientsArray,
        image: imageUrl,
        id: id
    }; 
    bar.addCocktail(cocktail);
}

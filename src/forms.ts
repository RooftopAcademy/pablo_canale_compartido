import Cocktail from "./interfaces/CocktailInterface";
import { bar } from "./index";
import User from "./entities/User";


export function addCocktail(event: Event): void {
    event.preventDefault();

    let name: string = (<HTMLInputElement>document.getElementById('cocktailName')).value;
    let ingredients: string = (<HTMLInputElement>document.getElementById('ingredients')).value;
    let ingredientsArray: string[] = ingredients.split(",");
    let imageUrl: string = (<HTMLInputElement>document.getElementById('image')).value;
    let id: string = (bar.cocktails.length + 1).toString();
    let ingredientsSize: number = ingredientsArray.length;

    let cocktail: Cocktail = {
        name: name,
        ingredients: ingredientsArray,
        image: imageUrl,
        id: id,
        amountOfIngredients: ingredientsSize
    };

    bar.addCocktail(cocktail);
}

export function registerUser(event: Event): void {
    event.preventDefault();

    let name: string = (<HTMLInputElement>document.getElementById('username-regis')).value;
    let pass: string = (<HTMLInputElement>document.getElementById('pass-regis')).value;
    let email: string = (<HTMLInputElement>document.getElementById('email-regis')).value;
    if (name && pass && email) {
        let user = new User;

        user.name = name;
        user.pass = pass;
        user.email = email;

        bar.addUser(user);
        bar.showMessage('You Are Now  Registered')

        document.getElementById('form-register')?.classList.toggle('hidden-container');
        document.getElementById('form-login')?.classList.toggle('hidden-container');
        document.getElementById('btn-goLogin')?.classList.toggle('hidden-container')
    }


}

export function loginUser(event: Event): void {
    event.preventDefault();

    let name: string = (<HTMLInputElement>document.getElementById('username')).value;
    let pass: string = (<HTMLInputElement>document.getElementById('pass')).value;

    if (bar.corroborateUser(name, pass)) {
        document.getElementById('form-cocktails')?.classList.toggle('hidden-container');
        document.getElementById('form-login')?.classList.toggle('hidden-container');
    }

}



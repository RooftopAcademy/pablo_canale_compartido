import Cocktail from "./CocktailInterface";
import { bar } from "./index";
import User from "./User";


export function addCocktail(event: Event): void {
    event.preventDefault();

    let name: string = (<HTMLInputElement>document.getElementById('cocktailName')).value;
    let ingredients: string = (<HTMLInputElement>document.getElementById('ingredients')).value;
    let ingredientsArray: string[] = ingredients.split(",");
    let imageUrl: string = (<HTMLInputElement>document.getElementById('image')).value;
    let id: string = (bar.cocktails.length + 1).toString();

    let cocktail: Cocktail = {
        name: name,
        ingredients: ingredientsArray,
        image: imageUrl,
        id: id
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
        bar.showMessage('You Are Now Registered')
    }

    bar.showMessage('All Fields Required')
}

export function loginUser(event: Event): void {
    event.preventDefault();

    let name: string = (<HTMLInputElement>document.getElementById('username')).value;
    let pass: string = (<HTMLInputElement>document.getElementById('pass')).value;

    if (!bar.corroborateUser(name, pass))
        bar.showMessage('Bad Password or Username')
}



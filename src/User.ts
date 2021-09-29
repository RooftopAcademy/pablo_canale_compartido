// Registered user can add favorites to bar//

import Cocktail from "./CocktailInterface";
import { UserState } from "./EnumUserState";

export default class User {

    private _name: string;
    private _state: UserState;
    private _favorites: Cocktail[];
    private _pass: string;
    private _email: string;

    constructor() {
        this._name = '';
        this._state = UserState.LOG_OUT;
        this._favorites = [];
        this._pass = '';
        this._email = '';
    }
    set email(email: string) {
        this._email = email;
    }

    set state(uState: UserState) {
        this._state = uState;
    }
    get state(): UserState {
        return this._state;
    }

    set name(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    set pass(pass: string) {
        this._pass = pass;
    }
    get pass(): string {
        return this._pass;
    }

    get favorites(): Cocktail[] {
        return this._favorites;
    }

    addFavorite(cocktail: Cocktail): void {
        this._favorites.push(cocktail)
    }

}
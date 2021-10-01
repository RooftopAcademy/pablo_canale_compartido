import Cocktail from '../interfaces/CocktailInterface';
import User from './User';
import { UserState } from '../enum/EnumUserState';
import View from './View';
import { StatusCodes } from '../enum/EnumStatusCodes';
import CocktailService from './CocktailService';


export default class OwnCocktail {

    private _users: User[];
    private _view: View;
    private _actualUser: User;
    private _cocktails: Cocktail[];
    private _cocktailService: CocktailService;

    constructor() {
        this._users = [];
        this._view = new View;
        this._actualUser = new User;
        this._cocktails = [];
        this._cocktailService = new CocktailService;

    }

    //* GETTERS AND SETTERS ////////////////////////////
    set cocktails(cocktails: Cocktail[]) {
        this.cocktails = cocktails;
    }

    get cocktails() {
        return this._cocktails;
    }

    get actualUser(): User {
        return this._actualUser;
    };
    set actualUser(user: User) {
        this._actualUser = user;
    }

    //*********************** */ METHODS */ **************************//

    //* COCKTAILS METHODS ////////////

    showCocktails(): void {
        this._view.showCocktails(this._cocktails);
    }

    async addCocktail(cocktail: Cocktail) {
        await this._cocktailService.postCocktailApi(cocktail);
        this._cocktails = await this._cocktailService.getCocktailsApi();
        this.showCocktails();
    }

    /**
     * TODO Need idea for this newId think 
     * @param id 
     */
    async deleteCocktail(id: string) {

        let newId: string = '';
        for (let i: number = 1; i < id.length; i++) // le saco la "/".... Hay alguna forma mejor de hacer esto?
            newId += id[i];

        await this._cocktailService.deleteCocktailApi(newId);
        this._cocktails = await this._cocktailService.getCocktailsApi();
        this.showCocktails();
    }

    cocktailFromId(id: string) {
        let cocktail = 0;
        while (this._cocktails[cocktail].id != id)
            cocktail++;
        return this._cocktails[cocktail];
    }

    //* USER METHODS /////////////

    addUser(user: User) {
        this._users.push(user);
    }

    /**
     * TODO Maybe give a object User for corroboration, less params
     * @param name 
     * @param pass 
     * @returns 
     */

    corroborateUser(name: string, pass: string) {

        let result: boolean = false;
        for (let i = 0; i < this._users.length; i++) {

            let user = this._users[i];
            if (user.name == name)
                if (user.pass == pass) {
                    result = true;
                    this._actualUser = user;
                    this._actualUser.state = UserState.LOG_IN;
                }
        }
        return result;
    }

    filterFavorites(): void {
        this._view.showCocktails(this._actualUser.favorites);
    }

    showMessage(message: string): void {
        this._view.showMessage(message);
    }
    /////////////////////////////// SPA ////////////////////////////////////
    /**
     * ! need refactor
     * TODO: the fetch of the content must be in View class, that magic number routN will be changed with router file
     * @param route 
     */
    async loadContent(route: string) {

        let routeN: string = '';

        for (let i = 2; i < route.length; i++) // le saco el "#/.... esto esta bien? Mejor forma de hacer esto?"
            routeN += route[i];

        try {
            let response = await fetch(`./views/${routeN}.html`);

            if (response.ok) {
                let newContent: string = await response.text();
                this._view.showPage(newContent);
            }
        }
        catch (e) {
            this.showMessage(`Error loadContent: ${e}`);
        }
    }

}


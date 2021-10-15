import Cocktail from '../interfaces/CocktailInterface';
import User from './User';
import { UserState } from '../enum/EnumUserState';
import View from './View';
import { StatusCodes } from '../enum/EnumStatusCodes';
import CocktailService from './CocktailService';
import Router from '../router/router';
import CocktailList from './CocktailList';
import Sort from '../interfaces/SortInterface';

export default class App {

    private _users: User[];
    private _view: View;
    private _actualUser: User;
    private _cocktailList: CocktailList;
    private _cocktailService: CocktailService;
    private _router: Router;

    constructor() {
        this._users = [];
        this._view = new View;
        this._actualUser = new User;
        this._cocktailService = new CocktailService;
        this._router = new Router;
        this._cocktailList = new CocktailList;

        (
            async () => {
                const cocktails = await this._cocktailService.getCocktailsApi()
                this._cocktailList.setCocktails(cocktails)
            }
        )();
    }



    //* GETTERS AND SETTERS ////////////////////////////    

    get router() {
        return this._router;
    }

    get actualUser(): User {
        return this._actualUser;
    };

    set actualUser(user: User) {
        this._actualUser = user;
    }

    //*********************** */ METHODS */ **************************//

    //* COCKTAILS METHODS ////////////

    sortList() {
        // Este sort es para testing
        let sort: Sort = {
            name: 1,
            id: 1,
        }
        this._view.showCocktails(this._cocktailList.getSort(sort))
    }

    cocktailsLenght() {
        return this._cocktailList.size()
    }

    showCocktails(): void {
        this._view.showCocktails(this._cocktailList.getCocktails());
    }

    async addCocktail(cocktail: Cocktail) {
        await this._cocktailService.postCocktailApi(cocktail);
        const cocktails = await this._cocktailService.getCocktailsApi();
        this._cocktailList.setCocktails(cocktails)
        console.log(this._cocktailList.getCocktails())
        this.showCocktails();
    }

    /** 
     * 
     * TODO Need idea for this newId think 
     * @param id 
     */
    async deleteCocktail(id: string) {

        let newId: string = '';
        for (let i: number = 1; i < id.length; i++) // le saco la "/".... Hay alguna forma mejor de hacer esto?
            newId += id[i];

        await this._cocktailService.deleteCocktailApi(newId);
        const cocktails = await this._cocktailService.getCocktailsApi();
        this._cocktailList.setCocktails(cocktails)
        this.showCocktails();
    }

    cocktailFromId(id: string) {
        let cocktail = 0;
        while (this._cocktailList.getCocktails()[cocktail].id != id)
            cocktail++;
        return this._cocktailList.getCocktails()[cocktail];
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
     * !
     * @param route 
     */
    async loadContent(htmlPage: string) {
        const content: string = await this._view.fetchPage(htmlPage)
        this._view.showPage(content);
    }
}

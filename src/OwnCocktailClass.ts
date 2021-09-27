import Cocktail from './CocktailInterface';
import RegisteredUser from './RegisteredUserClass';
import { UserState } from './EnumUserState';
import View from './ViewClass';
import { StatusCodes } from './EnumStatusCodes';

export default class OwnCocktail {

    private _users: RegisteredUser[];
    private _view: View;
    private _actualUser: RegisteredUser;
    private _cocktails: Cocktail[];
    
    private readonly _urlApi: string;

    constructor() {
        this._users = [];
        this._view = new View();
        this._actualUser = new RegisteredUser;
        this._cocktails = [];        
        this._urlApi = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/'
    } 
    
    ////////////////////GETTERS AND SETTERS ////////////////////////////
  
    get cocktails() {
        return this._cocktails;
    }
    get users() {
        return this._users;
    }    
    get actualUser(): RegisteredUser{
        return this._actualUser;
    };
    set actualUser(user: RegisteredUser) {
        this._actualUser = user;
    }

    ////////////////////////// METHODS /////////////////////////////////

    addUser(user: RegisteredUser) {        
        this._users.push(user);      
    }

    corroborateUser(name: string, pass: string){
        let result: boolean = false;
        for (let i = 0; i < this.users.length; i++) {

            let user = this.users[i];
            if (user.name == name) 
                if (user.pass == pass){
                    result = true;
                    this.actualUser = user;
                    this.actualUser.state = UserState.LOG_IN;
                }                   
        }
        return result;
    }
    
    filterFavorites(): void {  

        if(this._actualUser instanceof RegisteredUser )             
            this._view.showCocktails(this._actualUser.favorites);
    }

    showMessage(message : string): void{
        this._view.showMessage(message);
    }
    showCocktails(): void{
        this._view.showCocktails(this._cocktails);
    }
    
    cocktailFromId(id: string){
        // Esta funcion esta por morir ... trash, estoy rompiendo el encapsulamiento cuando la uso? I think soo... 2:46am 21/09/2021 escuchando lofi hip hop
        let cocktail = 0;        
        while(this._cocktails[cocktail].id != id)
        cocktail++;
        return this._cocktails[cocktail];
    }
    /////////////////////////////// SPA ////////////////////////////////////

    async loadContent(route : string){ 
        
        let routeN: string = '';
        for (let i = 2; i < route.length; i++) 
            routeN += route[i];        

        try{     
            let response = await fetch(`./views/${routeN}.html`);
            console.log(response);       
            
            if (response.ok){
                let newContent : string = await response.text();
                console.log(newContent)
                this._view.showContent(newContent);  
            }
        }
        catch(e){

        }
    }

    ////////////////////////////////////////////////////////////////
    //  COCKTAILS METHODS (ASYNC)  Podria hacer una clase con todos los metodos de la api?, tener un objeto api como atributo de esta clase...
    ///////////////////////////////////////////////////////////////

    async addCocktail(cocktail : Cocktail) {         
            await this.postCocktailApi(cocktail);
            this._cocktails = await this.getCocktailsApi();           
            this._view.showCocktails(this._cocktails);       
        }
    async deleteCocktail(id: string){
        //remove element with id 
        let newId: string = '';       
        for(let i: number = 1; i < id.length; i++)
            newId += id[i];        
        // Estoy realmente espera a que se borre en la api?
        await this.deleteCocktailApi(newId); 
        this._cocktails = await this.getCocktailsApi();
        //this.cocktails.splice(cocktail.id - 1, 1);   <------< Esto lo usaba antes...              
        this._view.showCocktails(this._cocktails);       
    } 
         
    async postCocktailApi(cocktail: Cocktail){         
        try{     
            await fetch(`${this._urlApi}Cocktail`,{
                "method":"POST",
                "headers":{"Content-type":"application/json"},
                "body":JSON.stringify(cocktail)
            });            
        }
        catch(e){
            alert("ERROR CATCH POST USER")
        }
    }
    
    async getCocktailsApi(){        
        let cocktails: Cocktail[];
        
        try{    
                    
            let res = await fetch(`${this._urlApi}Cocktail`);        
            cocktails = await res.json();
                                       
            if(res.ok){ 
                
            }    
            else{
                cocktails=[];
            }       
            
        }            
        catch(e){
            alert("ERROR CATCH GET COCKTAILS");
            cocktails=[];
        }    
        return cocktails; 
    }
    
    async deleteCocktailApi(id: string){ 
        try{
            await fetch(`${this._urlApi}Cocktail/${id}`,{
                "method":"DELETE"
            });            
        }
        catch(e){
            alert("ERROR CATH DELETE COCKTAIL");
        }
    }
    
}


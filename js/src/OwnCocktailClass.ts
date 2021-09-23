class OwnCocktail {

    private _users: RegisteredUser[];
    private _view: View;
    private _actualUser: User | RegisteredUser;
    private _cocktails: Cocktail[];
    private _messageBox: MessageBox;
    private readonly _urlApi: string;

    constructor() {
        this._users = [];
        this._view = new View();
        this._actualUser = new User();
        this._cocktails = [];
        this._messageBox = new MessageBox();
        this._urlApi = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/'
    } 
    
    ////////////////////GETTERS AND SETTERS ////////////////////////////
    get messageBox(){
        return this._messageBox;
    }

    get cocktails() {
        return this._cocktails;
    }
    get users() {
        return this._users;
    }    
    get actualUser(): User | RegisteredUser{
        return this._actualUser;
    };
    set actualUser(user: RegisteredUser | User) {
        this._actualUser = user;
    }
    ////////////////////////// METHODS /////////////////////////////////
    filterFavorites(): void {   
        if(this._actualUser instanceof RegisteredUser )     
            this._view.showCocktails(this._actualUser.favorites);
    }
    addUser(user: RegisteredUser) {        
        this._users.push(user);      
    }
    showBox(): void{
        this._view.showBox(this._messageBox);
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
    ////////////////////////////////////////////////////////////////
    //  COCKTAILS METHODS (ASYNC)  Podria hacer una clase con todos los metodos de la api?, tener un objeto api como atributo de esta clase...
    ///////////////////////////////////////////////////////////////

    async addCocktail(cocktail : Cocktail) {         
            await this.postCocktailApi(cocktail);
            this._cocktails = await this.getCocktailsApi();
            this._view.showCocktails(this._cocktails);       
        }
    async deleteCocktail(id: number){
        //remove element with id 

        // Estoy realmente espera a que se borre en la api?
        await this.deleteCocktailApi(id); 
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
    
    async deleteCocktailApi(id: number){ 
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


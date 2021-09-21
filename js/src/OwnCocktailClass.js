class OwnCocktail {
    constructor() {
        this.users = [];
        this.view = new View();
        this.actualUser = new User();
        this.cocktails = [];
        this.messageBox = new MessageBox();
        this.urlApi = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/'
    } 
    
    ////////////////////GETTERS AND SETTERS ////////////////////////////
    getMessageBox(){
        return this.messageBox;
    }

    getCocktails() {
        return this.cocktails;
    }
    getUsers() {
        return this.users;
    }    
    getActualUser() {
        return this.actualUser;
    };
    setActualUser(user) {
        this.actualUser = user;
    }
    ////////////////////////// METHODS /////////////////////////////////
    filterFavorites() {        
        this.view.showCocktails(this.actualUser.getFavorites());
    }
    addUser(user) {
        if (user instanceof (RegisteredUser))
        this.users.push(user);           
    }
    showBox(){
        this.view.showBox(this.messageBox);
    }
    showCocktails(){
        this.view.showCocktails(this.cocktails);
    }
    
    cocktailFromId(id){
        // Esta funcion esta por morir ... trash, estoy rompiendo el encapsulamiento cuando la uso? I think soo... 2:46am 21/09/2021 escuchando lofi hip hop
        let cocktail = 0;        
        while(this.cocktails[cocktail].id != id)
        cocktail++;
        return this.cocktails[cocktail];
    }
    ////////////////////////////////////////////////////////////////
    //  COCKTAILS METHODS (ASYNC)  Podria hacer una clase con todos los metodos de la api?, tener un objeto api como atributo de esta clase...
    ///////////////////////////////////////////////////////////////

    async addCocktail(cocktail) {         
            await this.postCocktailApi(cocktail);
            this.cocktails = await this.getCocktailsApi();
            this.view.showCocktails(this.cocktails);       
        }
    async deleteCocktail(id){
        //remove element with id 

        // Estoy realmente espera a que se borre en la api?
        let awaitDelete = await this.deleteCocktailApi(id); 
        this.cocktails = await this.getCocktailsApi();
        //this.cocktails.splice(cocktail.id - 1, 1);   <------< Esto lo usaba antes...              
        this.view.showCocktails(this.cocktails);       
    } 
         
    async postCocktailApi(cocktail){         
        try{     
            let res = await fetch(`${this.urlApi}Cocktail`,{
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
        let cocktails;
        try{              
            let res = await fetch(`${this.urlApi}Cocktail`);        
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
    
    async deleteCocktailApi(id){ 
        try{
            let res = await fetch(`${this.urlApi}Cocktail/${id}`,{
                "method":"DELETE"
            });            
        }
        catch(e){
            alert("ERROR CATH DELETE COCKTAIL");
        }
    }
    
}


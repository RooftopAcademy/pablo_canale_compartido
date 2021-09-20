class OwnCocktail {
    constructor() {
        this.users = [];
        this.view = new View();
        this.actualUser = new User();
        this.cocktails = [];
    }

    addCocktail(cocktail) {
        this.cocktails.push(cocktail);
        this.view.addCocktail(cocktail);
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
    cocktailFromId(id){
        let cocktail = 0;
        while(this.cocktails[cocktail].getId() != id)
            cocktail++;
        return this.cocktails[cocktail];
    }
    deleteCocktail(cocktail){
        //remove element with index        
        this.cocktails.splice(cocktail.getId() - 1, 1);       
        this.view.showCocktails(this.cocktails);       
    }

    addUser(user) {
        if (user instanceof (RegisteredUser))
            this.users.push(user);
    }
    filterFavorites() {        
        this.view.showCocktails(this.actualUser.getFavorites());
    }
}


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
        const cocktailsToShow = this.cocktails.filter(
            function (cocktail) {
                const favorites = this.actualUser.getFavorites();
                // La funcion find me devuelve un "Cocktail" si lo encuentra, y sino un undefined
                const favFound = favorites.find(
                    function (fav) {
                        return fav.getName() == cocktail.getName()
                    }
                );

                return favFound; // Si favFound es undefined se evaluara como false al retornar. De lo contrario indicara true.
            }
        );
        this.view.showCocktails(cocktailsToShow);
    }
}


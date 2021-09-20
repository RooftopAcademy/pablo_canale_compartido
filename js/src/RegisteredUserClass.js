// Registered user can add favorites to bar//
class RegisteredUser extends User {
    constructor(name, pass) {
        super();
        this.pass = pass;
        this.name = name;
        this.favorites = [];
    }
    getFavorites() {
        return this.favorites;
    }
    getName() {
        return this.name;
    }
    getPass() {
        return this.pass;
    }
    addFavorite(cocktail) {
        if (cocktail instanceof Cocktail)
            this.favorites.push(cocktail)
    }
    deleteFavorite(name) {
        this.getFavorites.forEach(element => {
            if (element.getName == name)
                this.getFavorites.delete(element);
            console.log(this.getFavorites);
        });
    }    
}
// Registered user can add favorites to bar//
class RegisteredUser extends User {    
    private _favorites: Cocktail[];

    constructor() {
        super();      
        this._favorites = [];
    }
    set name(name: string){
        this._name = name;
    }
    get name() : string {
        return this._name;
    }
    set pass(pass: string){
        this._pass = pass;
    }
    get pass() :string {
        return this._pass;
    }

    get favorites(): Cocktail[]{
        return this._favorites;
    }
    addFavorite(cocktail : Cocktail) {        
            this._favorites.push(cocktail)
    }
    /*Futura funcionalidad
    
    deleteFavorite(name: string) {
        this.favorites.forEach(element => {
            if (element.favorites == name)
                this.getFavorites.delete(element);
            console.log(this.getFavorites);
        });
    }    */
}
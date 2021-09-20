class Cocktail {
    constructor(name, ingredients, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.image = image;
        this.id = null;
    }
    getId(){
        return this.id;
    }
    setId(id) {
        this.id = id;
    }

    getIngredients() {
        return this.ingredients;
    }
    getName() {
        return this.name;
    }
    getImage() {
        return this.image;
    }

}
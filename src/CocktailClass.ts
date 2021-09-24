class Cocktail {

    private _name :string;
    private _ingredients: string[];
    private _image : string;
    private _id : string;

    constructor(){
        this._name = '';
        this._ingredients = [];
        this._image = '';
        this._id = '';
    }

    get id(): string{
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }

    get ingredients(): string[]{
        return this._ingredients;
    }
    set ingredients(ingredients: string[]){
        this._ingredients = ingredients;
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get image(){
        return this._image;
    }
    set image(image: string){
        this._image = image;
    }

}
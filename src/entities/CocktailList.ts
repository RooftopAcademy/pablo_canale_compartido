import Cocktail from '../interfaces/CocktailInterface';
import Ordenable from '../interfaces/OrdenableInterface';
import Sort from '../interfaces/SortInterface';

export default class CocktailList implements Ordenable {

    private cocktails: Cocktail[] = [
        { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '5', amountOfIngredients: 1 },
        { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '1', amountOfIngredients: 2 },
        { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '3', amountOfIngredients: 3 },
        { name: 'campari', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '8', amountOfIngredients: 2 },
        { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '2', amountOfIngredients: 2 },
        { name: 'negroni', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '7', amountOfIngredients: 2 },
        { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '6', amountOfIngredients: 3 },
        { name: 'caipi', ingredients: ['ing1', 'ing2', 'ing3'], image: '', id: '4', amountOfIngredients: 1 }
    ];
    private result: Cocktail[];

    sort: Sort;
    cache: Map<Sort, any[]>;


    setSorting(obj: Sort) {
        this.result = [...this.cocktails]
        this.sort = obj

        //if (this.cache.has(obj)) return        
        const objKeys = Object.keys(obj) as Array<keyof Cocktail>;

        let temp = this.sortByKeys(objKeys);
        console.log(temp);

    }

    sortBy(a: Cocktail, b: Cocktail, objKeys: Array<keyof Cocktail>, index: number): number {
        console.log(objKeys[index])
        if (a[objKeys[index]] > b[objKeys[index]]) return 1;
        if (a[objKeys[index]] < b[objKeys[index]]) return -1;
        if (!objKeys[index]) return 0;
        return this.sortBy(a, b, objKeys, ++index);
    }


    sortByKeys(objKeys: Array<keyof Cocktail>): Cocktail[] {
        return [...this.result]
            .sort((a: Cocktail, b: Cocktail) => this.sortBy(a, b, objKeys, 0));
    }

    getItems() {
        return this.cache.get(this.sort)
    }

    insert(cocktail: Cocktail): Cocktail {
        this.cocktails.push(cocktail);
        return cocktail;
    };



    delete(id: number): void {

    }



}




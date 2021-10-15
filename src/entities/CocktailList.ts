import Cocktail from '../interfaces/CocktailInterface';
import Ordenable from '../interfaces/OrdenableInterface';
import Sort from '../interfaces/SortInterface';

export default class CocktailList implements Ordenable {

    private cocktails: Cocktail[] = []
    private result: Cocktail[] = []
    sort: Sort
    cache: Map<Sort, any[]> = new Map

    getCocktails(): Cocktail[] {
        return this.cocktails
    }

    setCocktails(cocktails: Cocktail[]) {
        this.cocktails = cocktails
    }

    size() {
        return this.cocktails.length
    }


    getSort(sort: Sort) {

        if (!this.cache.has(sort)) {
            this.setSorting(sort)
            return this.result
        }
        return this.cache.get(sort);
    }

    setSorting(obj: Sort) {
        this.result = [...this.cocktails]
        this.sort = obj

        const objKeys = Object.keys(obj) as Array<keyof Cocktail>;

        this.result = this.sortByKeys(objKeys)
        this.cache.set(obj, this.result);

        console.log(this.result)
    }


    sortBy(a: Cocktail, b: Cocktail, objKeys: Array<keyof Cocktail>, index: number): number {

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

}




import Sort from "./SortInterface";

export default interface Ordenable{
    sort : Sort;
    cache : Map<Sort, any[]>; 

    setSorting(obj: Sort): void;
    sortByKey(key : string): any[];
    
}
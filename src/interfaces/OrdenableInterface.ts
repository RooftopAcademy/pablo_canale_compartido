import Sort from "./SortInterface";

export default interface Ordenable {
    sort: Sort;
    cache: Map<Sort, any[]>;

    setSorting(obj: Sort): void;
    sortByKeys(objKeys: Array<keyof any>, key: keyof any, index: number): any[];
}
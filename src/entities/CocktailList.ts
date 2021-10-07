import Cocktail from '../interfaces/CocktailInterface';

class Node<Cocktail> {
    public next: Node<Cocktail> | null = null;
    public prev: Node<Cocktail> | null = null;
    constructor(public data: Cocktail) {}
  }


interface ListInterface<Cocktail> {
    insertBegin(data: Cocktail): Node<Cocktail>;
    insertEnd(data: Cocktail): Node<Cocktail>;
    deleteNode(node: Node<Cocktail>): void;
    traverse(): Cocktail[];
    size(): number;
    search(comparator: (data: Cocktail) => boolean): Node<Cocktail> | null;
  }


class CocktailList implements ListInterface<Cocktail>{
    private head: Node <Cocktail> | null = null;

    insertBegin(data: Cocktail): Node<Cocktail> {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } 
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };
    
    public insertAtEnd(data: Cocktail): Node<Cocktail> {
        const node = new Node(data);
        if (!this.head) {
          this.head = node;
        } else {
          const getLast = (node: Node<Cocktail>): Node<Cocktail> => {
            return node.next ? getLast(node.next) : node;
          };
    
          const lastNode = getLast(this.head);
          node.prev = lastNode;
          lastNode.next = node;
        }
        return node;
      }
    deleteNode(node: Node<Cocktail>): void {
        throw new Error('Method not implemented.');
    }
    traverse(): Cocktail[] {
        throw new Error('Method not implemented.');
    }
    size(): number {
        throw new Error('Method not implemented.');
    }
    search(comparator: (data: Cocktail) => boolean): Node<Cocktail> {
        throw new Error('Method not implemented.');
    }
    private list : Node<Cocktail>[] = []



}
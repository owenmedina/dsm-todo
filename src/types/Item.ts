interface ItemInterface {
    label: string
}

class Item implements ItemInterface {
    label: string;
    
    constructor(label: string) {
        this.label = label;
    }
}

export default Item;
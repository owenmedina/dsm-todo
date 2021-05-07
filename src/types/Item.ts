interface ItemInterface {
    key: string;
    label: string
}

class Item implements ItemInterface {
    key: string;
    label: string;

    constructor(key: string, label: string) {
        this.key = key;
        this.label = label;
    }
}

export default Item;
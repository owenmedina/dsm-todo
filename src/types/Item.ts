interface ItemInterface {
    key: string;
    label: string;
    done: boolean;
}

class Item implements ItemInterface {
    key: string;
    label: string;
    done: boolean;

    constructor(key: string, label: string, done = false) {
        this.key = key;
        this.label = label;
        this.done = done;
    }
}

export default Item;
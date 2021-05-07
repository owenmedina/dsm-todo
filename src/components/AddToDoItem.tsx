import Input from "@material-ui/core/Input"
import { useState } from 'react';

import Item from '../types/Item';

interface Props {
    onAdd: (item: Item) => void;
}

const AddToDoItem: React.FC<Props> = ({onAdd}) => {
    const defaultItem = new Item('');
    const [newItem, setNewItem] = useState(defaultItem);

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target;
        setNewItem(new Item(value));
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd(newItem);
        setNewItem(new Item(''));
    };
    return (<form onSubmit={(submitHandler)}>
        <Input value={newItem.label} placeholder="New item" disableUnderline={true} onChange={changeHandler}/>
    </form>);
};

export default AddToDoItem;
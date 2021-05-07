import Input from "@material-ui/core/Input"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from '../types/Item';

interface Props {
    onAdd: (item: Item) => void;
}

const AddToDoItem: React.FC<Props> = ({onAdd}) => {
    const defaultItem = new Item(new Date().getMilliseconds().toString(), '');
    const [newItem, setNewItem] = useState(defaultItem);

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target;
        setNewItem((prev) => { return {...prev, label: value}});
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newItem.label === "") return;
        onAdd(newItem);
        const key = uuidv4();
        setNewItem(new Item(key, ''));
    };
    return (<form onSubmit={(submitHandler)}>
        <Input inputProps={{style: {padding: 0}}} value={newItem.label} placeholder="New item" disableUnderline={true} onChange={changeHandler}/>
    </form>);
};

export default AddToDoItem;
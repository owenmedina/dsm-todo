import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useState } from 'react';

import AddToDoItem from "./AddToDoItem";
import Item from '../types/Item';

const ToDoBody: React.FC = () => {
    const defaultItems: Array<Item> = [];
    const [items, setItems] = useState(defaultItems);

    const addItem = (item: Item) => {
        setItems((prevItems) => [...prevItems, item]);
        console.log("Added an item");
    }
    return (<List>
        <ListItem >
            ToDoListItems
        </ListItem>
        <ListItem >
            <AddToDoItem onAdd={addItem}/>
        </ListItem>
    </List>);
};

export default ToDoBody;
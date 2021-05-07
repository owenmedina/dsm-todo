import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useState } from 'react';

import AddToDoItem from "./AddToDoItem";
import ToDoList from './ToDoList';
import Item from '../types/Item';

const ToDoBody: React.FC = () => {
    const itemsKey = 'items';
    const lsItems = window.localStorage.getItem(itemsKey);
    const defaultItems: Array<Item> = lsItems === null ? [] : JSON.parse(lsItems);
    const [items, setItems] = useState(defaultItems);

    React.useEffect(() => {
        window.localStorage.setItem(itemsKey, JSON.stringify(items));
        console.log('items has changed: ', items);
    }, [items]);

    const addItem = (item: Item) => {
        setItems((prevItems) => [...prevItems, item]);
        console.log("Added an item");
    }

    const toDoListItems =
    <ToDoList items={items} />;

    return (<List>
        {items.length > 0 && toDoListItems}
        <ListItem >
            <AddToDoItem onAdd={addItem}/>
        </ListItem>
    </List>);
};

export default ToDoBody;
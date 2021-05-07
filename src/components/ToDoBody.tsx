import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core";

import AddToDoItem from "./AddToDoItem";
import ToDoList from './ToDoList';
import Item from '../types/Item';

const useStyles = makeStyles({
    root: {
        padding: '0.5rem 1.5rem 0.5rem 1.5rem'
    },
    listItem: {
        paddingRight: '0',
        paddingLeft: '0'
    }
});

const ToDoBody: React.FC = () => {
    const classes = useStyles();

    const itemsKey = 'items';
    const lsItems = window.localStorage.getItem(itemsKey);
    const defaultItems: Array<Item> = lsItems === null ? [] : JSON.parse(lsItems);
    const [items, setItems] = useState(defaultItems);

    React.useEffect(() => {
        window.localStorage.setItem(itemsKey, JSON.stringify(items));
    }, [items]);

    const addItem = (item: Item) => {
        setItems((prevItems) => [...prevItems, item]);
    }

    const toggleDone = (itemId: string) => {
        setItems((prevItems) => {
            const oldItemIndex = prevItems.findIndex((item) => item.key === itemId);
            if (oldItemIndex === -1) return prevItems;

            
            const oldItem = prevItems[oldItemIndex];
            const newDone = !oldItem.done;
            const newItems = prevItems;
            newItems.splice(oldItemIndex, 1, {...oldItem, done: newDone});
            return [...newItems];
        });
    }

    const deleteItem = (itemId: string) => {
        setItems((prevItems) => {
            const oldItemIndex = prevItems.findIndex((item) => item.key === itemId);
            if (oldItemIndex === -1) return prevItems;

            const newItems = prevItems;
            newItems.splice(oldItemIndex, 1);
            return [...newItems];
        })
    }

    return (<List className={classes.root}>
        {items.length > 0 && <ToDoList items={items} toggleDone={toggleDone} deleteItem={deleteItem}/>}
        <ListItem className={classes.listItem}>
            <AddToDoItem onAdd={addItem}/>
        </ListItem>
    </List>);
};

export default ToDoBody;
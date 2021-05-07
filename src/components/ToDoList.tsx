import React from "react";
import { useState } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Item from "../types/Item";
import ToDoItem from "./ToDoItem";
import '../assets/css/item.css';

interface Props {
    items: Item[];
    toggleDone: (id: string) => void;
    deleteItem: (id: string) => void;
}

const ToDoList: React.FC<Props> = ({items, toggleDone, deleteItem}) => {
    const [toDoListItems, setToDoListItems] = useState(items);
    React.useEffect(() => {
        setToDoListItems(items);
    }, [items]);
    const itemComponents = toDoListItems.map(item => <ToDoItem key={item.key} id={item.key} label={item.label} done={item.done} toggleDone={toggleDone} deleteItem={deleteItem}/>);

    return (<div>
          {itemComponents}
    </div>);
}

export default ToDoList;
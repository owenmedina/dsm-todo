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
    const itemComponents = toDoListItems.map(item => <CSSTransition key={item.key} timeout={{enter: 1000, exit: 500}} classNames='item'><ToDoItem id={item.key} label={item.label} done={item.done} toggleDone={toggleDone} deleteItem={deleteItem}/></CSSTransition>);

    return (<div>
        <TransitionGroup>
          {itemComponents}
        </TransitionGroup>
    </div>);
}

export default ToDoList;
import React from "react";
import { useState } from "react";
import Item from "../types/Item";
import ToDoItem from "./ToDoItem";

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
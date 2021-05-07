import Item from "../types/Item";
import ToDoItem from "./ToDoItem";

interface Props {
    items: Item[];
}

const ToDoList: React.FC<Props> = ({items}) => {
    const itemComponents = items.map(item => <ToDoItem key={item.key} label={item.label} />);
    return (<div>
        {itemComponents}
    </div>);
}

export default ToDoList;
import Item from "../types/Item";

interface Props {
    items: Item[];
}

const ToDoList: React.FC<Props> = ({items}) => {
    const itemComponents = items.map(item => <span key={item.key}>{item.label}</span>);
    return (<div>
        {itemComponents}
    </div>);
}

export default ToDoList;
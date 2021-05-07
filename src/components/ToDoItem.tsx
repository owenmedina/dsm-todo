import ListItem from '@material-ui/core/ListItem';

interface Props {
    label: string;
}

const ToDoItem: React.FC<Props> = ({label}) => {
    return (<ListItem>{label}</ListItem>);
}

export default ToDoItem;
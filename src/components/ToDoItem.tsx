import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

const useStyles = (done: boolean) => 
    makeStyles({
    listItem: {
        cursor: 'pointer',
        color: done ? '#c2c2c2' : '#000',
        textDecoration: done ? 'line-through' : 'none'
    }
});

interface Props {
    id: string;
    label: string;
    done: boolean;
    toggleDone: (id: string) => void;
}

const ToDoItem: React.FC<Props> = ({id, done, label, toggleDone}) => {
    const classes = useStyles(done)();
    const clickHandler = (ev: React.MouseEvent<HTMLLIElement>) => {
        toggleDone(id);
    }
    return (<ListItem className={classes.listItem} onClick={clickHandler}>{label}</ListItem>);
}

export default ToDoItem;
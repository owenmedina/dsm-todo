import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = (done: boolean) => 
    makeStyles({
    listItem: {
        cursor: 'pointer',
        color: done ? '#c2c2c2' : '#000',
        textDecoration: done ? 'line-through' : 'none',
        paddingRight: '0',
        paddingLeft: '0',

        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteButton: {
        padding: '0',
        '&:hover': {
            color: '#e63946',
            backgroundColor: 'transparent',
            transition: 'all 0.2s'
        }
    }
});

interface Props {
    id: string;
    label: string;
    done: boolean;
    toggleDone: (id: string) => void;
    deleteItem: (id: string) => void;
}

const ToDoItem: React.FC<Props> = ({id, done, label, toggleDone, deleteItem}) => {
    const classes = useStyles(done)();
    const doneHandler = (ev: React.MouseEvent<HTMLLIElement>) => {
        toggleDone(id);
    };
    const deleteHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        deleteItem(id);
    };
    return (<ListItem className={classes.listItem} onClick={doneHandler}>
        <span>{label}</span>
        <IconButton className={classes.deleteButton} aria-label="delete" onClick={deleteHandler}>
            <DeleteIcon />
        </IconButton>
    </ListItem>);
};

export default ToDoItem;
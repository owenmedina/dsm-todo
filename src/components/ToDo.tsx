import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

import ToDoHeader from './ToDoHeader';
import ToDoBody from './ToDoBody';
import { useState } from "react";

const useStyles = makeStyles({
    root: {
        alignSelf: 'flex-start',

        minHeight: '50%',
        width: '50%',
        margin: '2rem 0 2rem 0',
        padding: '1.5rem 0 1.5rem 0',
        backgroundColor: '#f1faee',
        borderRadius: '1rem'
    },
    container: {
        width: '100%',
    }
});
function ToDo() {
    const classes = useStyles();
    const toDoListTitle = 'Today';

    const [queryString, setQueryString] = useState('');

    const search = (query: string) => {
        setQueryString(query);
    }
    return (<Box className={classes.root}>
            <ToDoHeader title={toDoListTitle} search={search}/>
            <ToDoBody query={queryString}/>
        </Box>);
}

export default ToDo;
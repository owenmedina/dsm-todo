import Box from "@material-ui/core/Box";
// import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import ToDoHeader from './ToDoHeader';
import ToDoBody from './ToDoBody';

const useStyles = makeStyles({
    root: {
        alignSelf: 'flex-start',

        minHeight: '50%',
        width: '50%',
        marginTop: '2rem',
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
    return (<Box className={classes.root}>
            <ToDoHeader title={toDoListTitle}/>
            <ToDoBody />
        </Box>);
}

export default ToDo;
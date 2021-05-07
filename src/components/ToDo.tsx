import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        alignSelf: 'flex-start',

        minHeight: '50%',
        width: '50%',
        marginTop: '2rem',
        padding: '2rem 4rem',
        backgroundColor: '#f1faee',
        borderRadius: '1rem'
    }
});
function ToDo() {
    const classes = useStyles();
    return (<Box className={classes.root}>
        <Container><span>hello</span></Container>
        </Box>);
}

export default ToDo;
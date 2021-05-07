import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

interface Props {
    title: string
};

const useStyles = makeStyles({
    title: {
        padding: '.5rem',
        borderBottom: '1px solid rgba(229,229,229,.9)',
    }
});

const ToDoHeader: React.FC<Props> = ({title}) => {
    const classes = useStyles();
    return (<Typography className={classes.title} variant="h3">{title}</Typography>);
}

export default ToDoHeader;
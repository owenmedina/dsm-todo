import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import Search from './Search';

interface Props {
    title: string
    searchHandler: (query: string) => void;
};

const useStyles = makeStyles({
    header: {
        padding: '.5rem 1.5rem .5rem 1.5rem',
        borderBottom: '1px solid rgba(229,229,229,.9)',

        display: 'flex',
        justifyContent: 'space-between',
    }
});

const ToDoHeader: React.FC<Props> = ({title, searchHandler}) => {
    const classes = useStyles();
    return (<div className={classes.header} >
        <Typography variant="h4">{title}</Typography>
        <Search searchHandler={searchHandler}/>
        </div>);
}

export default ToDoHeader;
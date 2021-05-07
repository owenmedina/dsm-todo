import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import AddToDoItem from "./AddToDoItem";


const ToDoBody: React.FC = () => {
    return (<List>
        <ListItem >
            ToDoListItems
        </ListItem>
        <ListItem >
            <AddToDoItem />
        </ListItem>
    </List>);
};

export default ToDoBody;
import Input from "@material-ui/core/Input"

const AddToDoItem: React.FC = () => {
    return (<form>
        <Input placeholder="New item" disableUnderline={true}/>
    </form>);
};

export default AddToDoItem;
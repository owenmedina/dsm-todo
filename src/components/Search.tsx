import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const Search: React.FC = () => {
    const isExpanded = true;

    const searchButton = <IconButton>
        <SearchOutlined />
    </IconButton>
    return (<div>
        {searchButton}
    </div>);
}

export default Search;
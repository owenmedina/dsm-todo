import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import Input from "@material-ui/core/Input";
import React, { useState } from "react";

interface Props {
    search: (query: string) => void;
}
const Search: React.FC<Props> = ({search}) => {
    const [expanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(ev.target.value);
    }

    const submitHandler = (ev: React.FormEvent<HTMLElement>) => {
        ev.preventDefault();

        if (expanded) {
            search(searchQuery);
            setSearchQuery('');
        }
        
        setExpanded((prev) => !prev);

    }

    const searchButton = <IconButton type={'submit'} onSubmit={submitHandler} onClick={submitHandler}>
        <SearchOutlined />
    </IconButton>;
    const searchForm = <form onSubmit={submitHandler} >
        <Input inputProps={{style: {padding: 0}}} value={searchQuery} placeholder="Search" disableUnderline={true} onChange={changeHandler}/>
        {searchButton}
    </form>
    return (<div>
        {expanded ? searchForm : searchButton}
    </div>);
}

export default Search;
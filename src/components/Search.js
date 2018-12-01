import React from "react";
import SearchBar from "./SearchBar";

class Search extends React.Component{

    state={images:[]}
    render(){
        return(
            <div><SearchBar/></div>
        )
    }
}

export default Search;
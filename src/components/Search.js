import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class Search extends React.Component{

    state={images:[]}
    //adding callback function to get data from API
    onSearchSubmit=async (element)=>{
        const response= await axios.get("https://api.unsplash.com/search/photos",{
            params:{query:element},
            headers:{Authorization: "Client-ID 02231f22b458f98289c388e8b1fb33f6b9fe95405d5b5e7f38e1712729070f54"}
        })
        this.setState({images:response.data.results})
        
    }

    render(){
        return(
            <div>
                <SearchBar submit={this.onSearchSubmit}/>
                <ImageList Images={this.state.images}/>
            </div>
        )
    }
}

export default Search;
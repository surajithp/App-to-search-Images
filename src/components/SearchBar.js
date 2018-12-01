import React from "react";

//Creating SearchBar class  component

class SearchBar extends React.Component{
    
    state={inputtext:""}
    
    onFormSubmit=(event)=>{
        event.preventDefault();
    }
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="txt">Search here:</label>
                    <input type="text" value={this.state.inputtext} 
                    onChange={(event)=>this.setState({inputtext:event.target.value})} />
                </form>
            </div>
        )
    }


}

export default SearchBar;












import React from "react";

//Creating SearchBar class  component

class SearchBar extends React.Component{
    
    state={inputtext:""}
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="txt">Search here:</label>
                    <input type="text" value={this.state.inputtext} 
                    onChange={(event)=>this.setState({inputtext:event.target.value})} />
                </form>
            </div>
        )
    }


}












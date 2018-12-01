import React from "react";

//Creating SearchBar class  component

class SearchBar extends React.Component{
    
    state={inputtext:""}

   //callback function to prevent form element default behaviour  
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.submit(this.state.inputtext)
    }
    
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="txt">Search here:</label>
                        <input id="txt" type="text" value={this.state.inputtext} 
                        onChange={(event)=>this.setState({inputtext:event.target.value})} />
                    </div>
                    
                </form>
            </div>
        )
    }


}

export default SearchBar;












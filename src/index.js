import React from "react";
import ReactDOM from "react-dom";

//Adding App class Component
class App extends React.Component{
    render(){
        return<div>Hi There</div>
    }
}


ReactDOM.render(<App/>,document.getElementById("root"))
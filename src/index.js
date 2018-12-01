import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search"

//Adding App class Component
class App extends React.Component{
    render(){
        return<div><Search/></div>
    }
}


ReactDOM.render(<App/>,document.getElementById("root"))
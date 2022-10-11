import { Component } from "react";
import ChildComp from "./components/ChildComp";



class App extends Component{
    render(){
        return<div>
            <h2>Application Component</h2>
            <ChildComp/>
        </div>
    }
} 


export default App  
import { Component } from "react";
import UseStateComp from "./useState.hook";
 
class App extends Component{
    state = {
        apptitle : "Hooks",
       
    }
   
    render(){
        return <div className="container">
                <h1>{this.state.apptitle}</h1>
                <UseStateComp></UseStateComp>
               </div>
    }
}
 
export default App;                                                 
 

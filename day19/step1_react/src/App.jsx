import { Component } from "react";
import Hero from "./Hero";


class App extends Component{
    cartoons =["Doraemon","Kiterekshu","Ninja Hatoori","Shinchan","Bheem","Mighty Raju"];
    humans = ["Archies","Anmol","Sharan","Moulidhar","Mihir","Vijay"];
    colors = ["Yellow","Green","Blue","Pink","Orange","Purple"];


    render(){
        return <div>
            <Hero/>
 
        </div>
    }
}


export default App
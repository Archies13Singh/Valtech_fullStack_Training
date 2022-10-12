import { useState } from "react";
import GrandParent from "./components/grandparent.component";
import { UseEffectComp } from "./components/useEffectComp";
import UseReducer from "./components/useReducer";

let App = ()=> {
    /*  
    let [power, setPower] = useState(0);
     let [version, setVersion] = useState(0);
     let [rating, setRating] = useState(0); 
     */
     let [state, setState] = useState({ power: 0, version : 0, rating : 0});


     
     return <div>
                 <h1>Welcome to your life | Power is { state.power } | Version is : { state.version } | Rating : { state.rating }</h1>
                 <input type="range" onChange={()=> setState({...state, power: state.power+1})} />
                 <br />
                 <input type="range" onChange={()=> setState({...state, version : state.version+1} )} />
                 <br />
                 <input type="range" onChange={()=> setState({...state, rating: state.rating+1} )} />
                 {state.power < 50 ? <UseEffectComp state={state} /> : console.log("Component Removed")}
                 <hr />
                 <UseReducer/>


                 <GrandParent/>
             </div>
        
 }
  
  
 export default App
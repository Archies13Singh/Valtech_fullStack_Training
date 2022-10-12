import { useReducer, useRef } from "react";


let UseReducer = ()=> {
    /*  
    let [power, setPower] = useState(0);
     let [version, setVersion] = useState(0);
     let [rating, setRating] = useState(0); 
     */
    let fname = useRef()
    let lname = useRef()
    let reduceFun = (state, action)=>{
        switch(action.type){
            case "Update_FirstName" :return({
                ...state,firstname:action.payload
            })
            case "Update_LastName" :return({
                ...state,lastname:action.payload
            })

            default : return state
        }
    }
    let [state, dispatch] = useReducer(reduceFun,{firstname:"", lastname :""})
    // state = {firstname : "",lastname : ""}
     
     return <div>
                 <input type="text" ref={fname}/>
                 <button onClick={()=>dispatch({type : "Update_FirstName", payload : fname.current.value })}>Firstname</button>
                 <p>firstname :{state.firstname}</p>
                 <input type="text" ref={lname}/>
                 <button onClick={()=>dispatch({type : "Update_LastName", payload : lname.current.value })}>Lastname</button>
                 <p>lastname : {state.lastname}</p>
             </div>
 }
 
  
 export default UseReducer
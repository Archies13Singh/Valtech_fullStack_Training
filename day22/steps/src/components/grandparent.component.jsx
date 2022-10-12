import { useState } from "react"
import FamilyContext from "../context/family.context";
import Parent from "./parent.component";


let GrandParent = ()=> {
   let [gift,updategift] = useState(0);
   return <div style={{border:"1px solid black", margin :"10px", padding:"20px"}}>
        <h1>GrandParent Component</h1>
        <button onClick={()=>updategift(Math.round(Math.random()*10000))}>Provider Gift</button>
        <FamilyContext.Provider value={gift}>
            <Parent/>
        </FamilyContext.Provider>
   </div>
 }
 
  
 export default GrandParent
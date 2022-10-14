import { useContext } from "react";
import FamilyContext from "../context/family.context";


let Child = ()=> {

    let grandparent = useContext(FamilyContext)
   return <div style={{border:"1px solid black", margin :"10px", padding:"20px"}}>
        <h1>Child Component</h1>
        {/* <FamilyContext.Consumer>{
                (val)=><h2>Gift Received : {val}</h2>
                
            }
        </FamilyContext.Consumer> */}
        <h2>{grandparent}</h2>
        <h2>{grandparent}</h2>
        <h2>{grandparent}</h2>
        <h2>{grandparent}</h2>
   </div>
 }
 
  
 export default Child
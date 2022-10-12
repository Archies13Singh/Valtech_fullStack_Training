import FamilyContext from "../context/family.context";


let Child = ()=> {
   return <div style={{border:"1px solid black", margin :"10px", padding:"20px"}}>
        <h1>Child Component</h1>
        <FamilyContext.Consumer>{
                (val)=><h2>Gift Received : {val}</h2>
                
            }
        </FamilyContext.Consumer>
   </div>
 }
 
  
 export default Child
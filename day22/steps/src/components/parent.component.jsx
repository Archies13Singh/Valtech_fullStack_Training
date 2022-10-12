import Child from "./child.component"


let Parent = ()=> {
   return <div style={{border:"1px solid black", margin :"10px", padding:"20px"}}>
        <h1>Parent Component</h1>
        <Child/>
   </div>
 }
 
  
 export default Parent
import { useEffect } from "react";

let UseEffectComp = (props)=> {
    let power = props.state.power;
        useEffect(()=>{
            console.log("Component get mounted")
         },[])
         useEffect(()=>{
            console.log("Component get Updated")
         },[power])
         useEffect(()=>{
            return(
                console.log("Component get unmounted")
            )
         },[])
    
    return <div>
                <h2>UseEffect Hook</h2>
                <h3>Power is : { power }</h3>
               {/*  <h3>Version is : { props.version }</h3>
                <h3>Rating is : { props.rating }</h3> */}
            </div>
}
export { UseEffectComp };
 
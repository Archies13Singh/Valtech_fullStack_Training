import { useRef, useState } from "react"

let UseStateComp = ()=>{
    let [heroes, setHeroes] = useState([]);
    let elm = useRef(null);
    let addHero = ()=>{
        setHeroes([...heroes, elm.current.value ])  ;
        elm.current.value = "";
    }
    return <div>
                <h1>Use State Assignment Component</h1>
                <label htmlFor="fname"> Avenger Name : 
                <input ref={elm} type="text" /> 
                </label>
                <button onClick={ addHero }>Add Hero</button>
                <hr />
                <ol>
                    {
                        heroes.map((val, idx)=>{
                            return <li key={idx}>{ val }</li>
                        })
                    }
                </ol>
            </div>
}
export default UseStateComp
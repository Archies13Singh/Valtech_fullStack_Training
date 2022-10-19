import { useDispatch, useSelector} from "react-redux"
import {addHero, removeHero} from "../redux"

let HeroHookComp = ()=>{
        const numOfHeroesHook = useSelector(state => state.heroes.numofHeroes)
        const dispatch = useDispatch()
        return<div>
            <h2>Hero Component Without Connect</h2>
            <h3>Total Heroes Recruited : {numOfHeroesHook}</h3>
            <button onClick={()=>dispatch(addHero())}>Add Hero</button>
            <button onClick={()=>dispatch(removeHero())}>Remove Hero</button>
        </div>
}


export default HeroHookComp
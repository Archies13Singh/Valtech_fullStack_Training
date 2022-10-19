import { ADD_HERO, REMOVE_HERO } from "./hero.type";


const addHero = ()=>{
    return{
        type : ADD_HERO
    }
}
const removeHero = ()=>{
    return{
        type : REMOVE_HERO
    }
}



export {addHero, removeHero}
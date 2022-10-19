import { ADD_HERO, REMOVE_HERO } from "./hero.type"

const heroIntialState = {
    numofHeroes : 0
}

const heroReducer = (state = heroIntialState, action)=>{
    switch(action.type){
        case ADD_HERO : return {...state , numofHeroes : state.numofHeroes + 1}
        case REMOVE_HERO : return {...state , numofHeroes : state.numofHeroes - 1}
        default : return state
    }
}

export {heroReducer}
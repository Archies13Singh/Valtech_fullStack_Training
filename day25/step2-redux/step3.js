let redux = require("redux")
let creatStore = redux.legacy_createStore;
let combineStore = redux.combineReducers

// action type 

let ACTION = ""
let RemoveHero = ""
let setHero = ""
let ACTIONMOVIE = ""
let RemoveMOVIE = ""
let setMOVIE = ""


// action creator 
let actadd = ()=>{
    return {
        type : ACTION
    }
}
let actremove = ()=>{
    return {
        type : RemoveHero
    }
}
let setact= (num)=>{
    return {
        type : setHero,
        payload : num
    }
}

let actaddmovie = ()=>{
    return {
        type : ACTIONMOVIE
    }
}
let actremovemovie = ()=>{
    return {
        type : RemoveMOVIE
    }
}
let setactmovie= (num)=>{
    return {
        type : setMOVIE,
        payload : num
    }
}


// initialstate
let initialstate = {
    actionPower : 1,
    moviesPower : 1
}

// reducer 
let reducerHero = (state = initialstate , action)=>{
    switch(action.type){
        case ACTION :return{
            actionPower : state.actionPower + 1
        }
        case RemoveHero :return{
            actionPower : state.actionPower - 1
        }
        case setHero :return{
            actionPower : action.payload
        }
        default : return state
    }
}
let reducerMovie = (state = initialstate , action)=>{
    switch(action.type){
        case ACTIONMOVIE :return{
            ...state, //will use spread operator here because there are more the 2 properties defined in intialstate and if we not use spread operator then it will not update the state of the values exclusing first property
            actionPower : state.moviesPower + 1
        }
        case RemoveMOVIE :return{
            ...state,
            actionPower : state.moviesPower - 1
        }
        case setMOVIE :return{
            ...state,
            actionPower : action.payload
        }
        default : return state
    }
}

// create the store

// store mulitple reducer in combinereducer
let rootStore = combineStore({
    hero : reducerHero,
    movie : reducerMovie
})
let store = creatStore(rootStore)
console.log("intial value of the store : ", store.getState())

// subscribe/unsubscribe
let unsubscribe = store.subscribe(()=>console.log("Subscribed", store.getState()))

// dispatch
store.dispatch(actadd())
store.dispatch(actadd())
store.dispatch(actremove())
// unsubscribe()
store.dispatch(actadd())
store.dispatch(actremove())
store.dispatch(actadd())
store.dispatch(actremove())
store.dispatch(setact(10))
store.dispatch(actaddmovie())
store.dispatch(actremovemovie())
store.dispatch(actadd())
store.dispatch(actaddmovie())
store.dispatch(actremovemovie())
store.dispatch(setactmovie(13))

let redux = require("redux")
let creatStore = redux.legacy_createStore;


// action type 

let ACTION = ""
let RemoveHero = ""
let setHero = "SETHERO"


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


// initialstate
let initialstate = {
    actionPower : 12
}

// reducer 
let reducer = (state = initialstate , action)=>{
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

// create the store
let store = creatStore(reducer)
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
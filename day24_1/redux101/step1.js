// action type is a constant name of event
// action creator is function that returns an action object
// reducer is a function which has switch cases to call funtions based on action ty[e]
// intial state is intial value of store object
// store is an object that stores all shared states of your application
// subscribe/unsubscribe to listen to changes of the store
// dispatch is a method that can take action object
let redux = require("redux")
let createStore = redux.legacy_createStore



// Action 
const ADDHERO = "ADDHERO"

// Action creator

let addhero = function(){
    return {
        type : ADDHERO 
    }
}

// intial state
let intialState = {
    numberofHeroes : 0
}

// reducer
let reducer = (state = intialState , action)=>{
    switch(action.type){
        case ADDHERO : return{
            numberofHeroes : state.numberofHeroes + 1
        }
        default : return state
    }
}

let store = createStore(reducer)
console.log("intial value of store ", store.getState())

let unsubscribe = store.subscribe(()=>console.log("Subscribed", store.getState()))


store.dispatch(addhero())
store.dispatch(addhero())
unsubscribe()
store.dispatch(addhero())
store.dispatch(addhero())
console.log(store.getState())
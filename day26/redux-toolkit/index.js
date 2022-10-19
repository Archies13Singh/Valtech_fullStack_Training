const store = require("./app/store");
const heroActions = require("./features/hero/heroSlice").heroActions
const movieActions = require("./features/hero/movieSlice").movieActions

console.log("Initial State ", store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
})

store.dispatch(movieActions.addTicket())
store.dispatch(heroActions.addHero())
store.dispatch(heroActions.addHero())
store.dispatch(heroActions.removeHero())
store.dispatch(heroActions.addHero())
store.dispatch(heroActions.addHero())
store.dispatch(heroActions.removeHero())
store.dispatch(heroActions.addHero())
console.log("Movies Slice")
store.dispatch(movieActions.addTicket())
store.dispatch(movieActions.addTicket())
store.dispatch(movieActions.addTicket())
store.dispatch(movieActions.removeTicket())
store.dispatch(movieActions.addTicket())





unsubscribe()
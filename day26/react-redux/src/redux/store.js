// action type
// action creator
// intial state
// reducer
// store
// subscribe/unsubscribe
// dispatch

// store
import {combineReducers, legacy_createStore as createStore} from "redux"
import { heroReducer } from "./hero/hero.reducer"
import {movieReducer} from "./hero/movie.reducer"

let rootReducer = combineReducers({
    heroes : heroReducer,
    movies : movieReducer
})

const store = createStore(rootReducer)


export default store
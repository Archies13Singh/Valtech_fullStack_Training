import {ADD_MOVIE, REMOVE_MOVIE} from "./movie.type"


const movieIntialState = {
    numTickets : 0
}


const movieReducer = (state = movieIntialState, action)=>{
    switch(action.type){
        case ADD_MOVIE : return{...state,numTickets : state.numTickets + 1 }
        case REMOVE_MOVIE : return{...state,numTickets : state.numTickets - 1 }
        default : return state
    }
}


export {movieReducer}
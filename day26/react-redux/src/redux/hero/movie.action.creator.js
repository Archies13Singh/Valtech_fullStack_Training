import {ADD_MOVIE, REMOVE_MOVIE} from "./movie.type"


const addMovie = ()=>{
    return{
        type : ADD_MOVIE
    }
}
const removeMovie = ()=>{
    return{
        type : REMOVE_MOVIE
    }
}


export {addMovie, removeMovie}
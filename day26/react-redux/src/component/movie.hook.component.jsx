import { useDispatch, useSelector} from "react-redux"
import {addMovie, removeMovie} from "../redux"

let MovieHookComp = ()=>{
        const numofTickets = useSelector(state => state.movies.numTickets)
        const dispatch = useDispatch()
        return<div>
            <h2>Movie Component Without Connect</h2>
            <h3>Total Ticket Booked : {numofTickets}</h3>
            <button onClick={()=>dispatch(addMovie())}>Add Ticket</button>
            <button onClick={()=>dispatch(removeMovie())}>Remove Ticket</button>
        </div>
}


export default MovieHookComp
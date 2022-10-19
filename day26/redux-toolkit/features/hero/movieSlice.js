const { heroActions } = require("./heroSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numberofTickets : 0
}

const movieSlice = createSlice({
    name : "Movie",
    initialState : initialState,
    reducers : {
        addTicket : (state)=>{
            state.numberofTickets++
        },
        removeTicket : (state)=>{
            state.numberofTickets--
        }
    }
})

module.exports = movieSlice.reducer
module.exports.movieActions = movieSlice.actions
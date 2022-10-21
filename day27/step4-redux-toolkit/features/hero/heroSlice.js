const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numberofHeroes : 0
};

const heroSlice = createSlice({
    name : "Hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=>{
            state.numberofHeroes++
        },
        removeHero : (state)=>{
            state.numberofHeroes--
        },
        setHero : (state, action)=>{
            state.numberofHeroes = action.payload
        },
    },
    extraReducers : builder=>{
        builder.addCase(heroActions.addHero, state=>{
            state.numberofTickets++
        })
    }
})


module.exports = heroSlice.reducer
module.exports.heroActions = heroSlice.actions
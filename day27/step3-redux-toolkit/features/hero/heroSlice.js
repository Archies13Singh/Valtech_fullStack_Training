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
        }
    }
})


module.exports = heroSlice.reducer
module.exports.heroActions = heroSlice.actions
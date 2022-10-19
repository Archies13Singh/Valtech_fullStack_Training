const configureStore = require("@reduxjs/toolkit").configureStore
const heroReducer = require("../features/hero/heroSlice")
const movieReducer = require("../features/hero/movieSlice")


const store = configureStore({
    reducer :{
        hero : heroReducer,
        movie : movieReducer
    }
});

module.exports = store
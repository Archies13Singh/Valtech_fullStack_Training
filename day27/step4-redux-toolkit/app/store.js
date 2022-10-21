const configureStore = require("@reduxjs/toolkit").configureStore
const heroReducer = require("../features/hero/heroSlice")
const movieReducer = require("../features/hero/movieSlice")
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const logger = require("redux-logger").createLogger;




const store = configureStore({
    reducer :{
        hero : heroReducer,
        movie : movieReducer
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger())
});

module.exports = store
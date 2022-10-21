const configureStore = require("@reduxjs/toolkit").configureStore

// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const logger = require("redux-logger").createLogger;
const userReducer = require("../features/user/userSlice")


const store = configureStore({
    reducer :{
        user : userReducer
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger())
});

module.exports = store
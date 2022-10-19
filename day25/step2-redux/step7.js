let redux = require("redux");
// const { default: thunk } = require("redux-thunk");
let reduxThunk = require("redux-thunk").default;
const logger = require("redux-logger").createLogger
let compose = redux.compose
let createStore = redux.legacy_createStore;
let applyMiddleware = redux.applyMiddleware;
let axios = require("axios");
 
// action type is a constant name
const AXIOS_USERS_REQUEST = "AXIOS_USERS_REQUEST";
const AXIOS_USERS_SUCCESS = "AXIOS_USERS_SUCCESS";
const AXIOS_USERS_ERROR = "AXIOS_USERS_ERROR";
 
// action creator is function that returns an action object 
let fetchUsers = () => {
    return {
        type : AXIOS_USERS_REQUEST
    }
}
let fetchUserSuccess = (users) => {
    return {
        type : AXIOS_USERS_SUCCESS,
        payload : users
    }
}
let fetchUserError = (error) => {
    return {
        type : AXIOS_USERS_ERROR,
        payload : error
    }
}
// intial state is intial value of store object
const intialState = {
    loading : false,
    error : '',
    users : []
}
 
// reducer is a function which has switch cases to call functions based on action type
const reducer = (state = intialState, action)=>{
    switch(action.type){
        case AXIOS_USERS_REQUEST : return {     ...state,
                                                loading : true,
                                                error : '',
                                                users : [] 
                                            }
        case AXIOS_USERS_SUCCESS : return {     ...state,
                                                loading : false,
                                                error : '',
                                                users : action.payload 
                                            }
        case AXIOS_USERS_ERROR : return {   ...state,
                                                loading : false,
                                                error : action.payload,
                                                users : [] 
                                            }
        default : return state
        
    }
};
 
let thunkFetchUsers = () =>{
    return function(dispatch){
        dispatch( fetchUsers() );
    }
}
let thunkAjaxUsers = () =>{
    return function(dispatch){
        axios
        .get("https://reqres.in/api/users?page=1")
        .then(res =>  dispatch( fetchUserSuccess(res.data.data) ) )
        .catch( error =>  dispatch( fetchUserError(error) ) )
    }
}
 
 
// store is an object that stores all shared states of your application
const store = createStore(reducer,compose(applyMiddleware(logger(),reduxThunk)));
 
// subscribe / unsubscribe to listen to changes of the store 
store.subscribe( ()=>{
    console.log( store.getState() );
})
// dispatch is a method that can take action object 
 
store.dispatch( thunkFetchUsers() );
store.dispatch( thunkAjaxUsers() );
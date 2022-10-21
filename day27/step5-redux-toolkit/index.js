const store = require("./app/store");
const fetchUsers = require("./features/user/userSlice").fetchUsers

console.log("Initial State ", store.getState())

store.subscribe(()=>{})

store.dispatch(fetchUsers())


const express = require("express")


let app = express()


app.get("/",(req,res)=>{
    res.render("home.pug")
})
app.get("/login",(req,res)=>{
    res.render("login.pug")
})
app.get("/logout",(req,res)=>{
    res.render("logout.pug")
})
app.get("/profile",(req,res)=>{
    res.render("profile.pug")
})
app.get("/register",(req,res)=>{
    res.render("register.pug")
})

app.listen(2025,"localhost", (error)=>{
    if(error){
        console.log(error)
    }
})
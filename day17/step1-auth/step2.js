const express = require("express")
const mongoose = require("mongoose")
const session = require("client-sessions")
const bcrypt = require("bcrypt")

let app = express()
// ----------------------------------
app.use(express.urlencoded({extended : true}))
app.use(session({
    cookieName : "session",
    secret : "234ij24rij45rnbfijdsfnbkvwerct3rib",
    duration : 30*60*1000,
    activeDuration : 10 * 60 * 1000,
    cookie :{
        ephemeral : true
    },
}))

// ----------------------------------
const Schema = mongoose.Schema
var ObjectId = mongoose.ObjectId
var dburl = "mongodb+srv://archies_004:archies_04@cluster0.xmo49qm.mongodb.net/valtechdb?retryWrites=true&w=majority"

var User = mongoose.model("User",Schema({

    id : ObjectId,
    firstname : String,
    lastname : String,
    email : {type : String , unique : true},
    password : String
}))



mongoose.connect(dburl).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

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
app.get("/profile",(req,res)=>{
   if(req.session && req.session.user){
    User.findOne({email : req.session.user.email}, function(err, user){
0
        if(!user){
            req.session.reset();
            res.redirect("/login")
        }
        else{
            res.render("profile.pug")
        }
    })
   }
   else{
    res.redirect("/login")
   }
})
app.get("/register",(req,res)=>{
    res.render("register.pug")
})

app.post("/register",(req,res)=>{
    var hash = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    var user= new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : hash
    })
    user.save((err)=>{
        let error = ""
        if(err){
            if(err.code == 11000){
                error : "Email Id already exists"
            }
            else{
                error : "something went wrong"
            }
            res.render("register.pug",{
                error
            })
        }
        else{
            res.redirect("/profile")
        }
    })
})


app.post("/login",(req,res)=>{
    User.findOne({email : req.body.email}, function(error,user){
        if(!user){
            res.render("login.pug",{
                error : "no user by that email id"
            })
        }
        else{
            // req.body.password === user.password
            if(bcrypt.compareSync(req.body.password , user.password)){
                req.session.user = user;
                res.redirect("/profile");
            }else{
                res.render("login.pug",{
                    error : "invalid email or password"
                })
            }
        }
    })
})

app.listen(2025,"localhost", (error)=>{
    if(error){
        console.log(error)
    }
})
const express = require("express");
const mongoose = require("mongoose");
const session = require("client-sessions");
const bcrypt = require("bcrypt");
const csurf = require("csurf");
 
let app = express();
//--------------------------------------
app.use(express.urlencoded({ extended : true }));
app.use( session({
    cookieName : "valtech",
    secret : "345tyhfew3456yjhr32567ukmnge3sa34tyhnr345yhge345tyh",
    duration : 30 * 60 * 1000,
    activeDuration : 10 * 60 * 1000,
    cookie : {
        ephemeral : true, // spelled as " F emral ""
        // httpOnly : true,
        // secure : true,
    }
}) );
// csrf must be added after the session middleware is configured
// and pass the sessionkey which is the name of the cookie


// Why csruf comes into the scenary :- Csruf is used so that one shouldnot delete client side cookies using some other website. These is called cross site request forgery
app.use(csurf({  sessionKey : "valtech" })); // add csrf : cross site request forgery 
// global middle-ware
app.use(function(req, res, next){
    if(req.valtech && req.valtech.user){
        User.findOne({ email : req.valtech.user.email }, function(err, user){
            if(user){
                // req.user = user;
                req.valtech.user = req.registeredUser = user;
                // delete req.user.password;
                // res.locals.user = req.user;
            }
            next();
        })
    }else{
        next();
    }
})
let requireLogin = function(req, res, next){
    if(!req.registeredUser){
        res.redirect("/login");
    }else{
        next();
    }
}
//--------------------------------------
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : { type : String, unique : true },
    password : String
}));
var dburl = "mongodb+srv://archies_004:archies_04@cluster0.xmo49qm.mongodb.net/valtechdb?retryWrites=true&w=majority"

mongoose.connect(dburl)
.then(res => console.log("DB Connected"))
.catch( error => console.log("Error ", error) );
 
//--------------------------------------
// console.log(bcrypt.hashSync("vijay", bcrypt.genSaltSync(10)));
 
app.get("/", (req, res)=>{
    res.render("home.pug")
})
app.get("/login", (req, res)=>{
    res.render("login.pug", { csrfToken : req.csrfToken() })
})
app.post("/login", (req, res)=>{
    User.findOne({ email : req.body.email}, function(error, user){
        if(!user){
            res.render("login.pug",{
                error : "no users by that credentials"
            })
        }else{
            if(bcrypt.compareSync(req.body.password, user.password)){
                req.valtech.user = user;
                res.redirect("/profile");
            }else{
                res.render("login.pug",{
                    error : "invalid email or password"
                })
            }
        }
    })
})
app.get("/register", (req, res)=>{
    res.render("register.pug", { csrfToken : req.csrfToken() })
})
app.post("/register", (req, res)=>{
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : hash
    });
    user.save(function(error){
        let clienterror = "";
        if(error){
            if(error.code == 11000){ clienterror = "email id already registered";}
            else{ clienterror = "something went wrong"; }
            res.render("register.pug", { clienterror })
        }else{
            res.redirect("/profile");
        }
    })
})
/* app.get("/profile", (req, res)=>{
    if(req.valtech && req.valtech.user){
        User.findOne({ email : req.valtech.user.email }, function(err, user){
            if(!user){
                req.valtech.reset();
                res.redirect("/login");
            }else{
                res.locals.user = user;
                res.render("profile.pug");
            }
        })
    }else{
        res.redirect("/login");
    }
}) */
app.get("/profile", requireLogin, (req, res)=>{
    res.render("profile.pug");
})
app.get("/dashboard", requireLogin, (req, res)=>{
    res.render("dashboard.pug");
});
app.get("/logout", (req, res)=>{
    req.valtech.reset();
    res.redirect("/");
});
app.get("**", (req, res)=>{
    res.redirect("/");
});
app.listen(2525,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("Server is now live on localhost:2525")
    };
})  

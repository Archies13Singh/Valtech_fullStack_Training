const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require("./config.json")
let errorHandler = require('./utils').errorhandler
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.xmo49qm.mongodb.net/${config.dbname}?retryWrites=true&w=majority`

let app = express()

app.set(express.json())
app.use(express.static(__dirname+'/public'))
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId;
let port = process.env.PORT || config.port

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title : String,
    firstname : String,
    lastname : String,
}))

mongoose.connect(string_mongo).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("Error",err)
})


// setTimeout(()=>{
//     let hero = new Hero({
//         title : "Human",
//         firstname : "Jethalal",
//         lastname : "Gada"
//     })

//     hero.save()
//     console.log("DB updated")
// })

// CREATE
app.post("/data",(req,res)=>{
    let hero = new hero(req.body)
    hero.save().then(createRes => console.log("hero info updated"))
})

// UPDATE
app.post("/data",(req,res)=>{
    Hero.findByIdAndUpdate({id : req.params.hid})
    .then(dbRes =>{
        dbRes.title = "Joker";
        dbRes.save().then(updateRes => console.log("Hero info updated"))
    })
})


app.get("/",(req,res)=>{
    res.send("hello from express")
})

app.listen(config.port,config.host,errorHandler);
console.log("server is now ready on localhost:2525")
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require("./config.json")
let errorHandler = require('./utils').errorhandler
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.xmo49qm.mongodb.net/${config.dbname}?retryWrites=true&w=majority`

let app = express()

let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId;
let port = process.env.PORT || config.port

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title : String,
    firstname : String,
    lastname : String
}))

mongoose.connect(string_mongo).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("Error",err)
})

app.use(express.static(__dirname+'/public')).use(express.json()).use(cors())

// setTimeout(()=>{
//     let hero = new Hero({
//         title : "Human",
//         firstname : "Kuldeep",
//         lastname : "Singh"
//     })

//     hero.save()
//     console.log("DB updated")
// })

// CREATE
app.post("/data",(req,res)=>{
    let hero = new Hero(req.body)
    // console.log(hero)
    hero.save().then(dbres=>{
        res.send({ message : "hero added to list"})
        console.log("db updated")
    })
})

// READ UPDATE
app.get("/edit/:heroid", (req, res)=>{
    Hero.findById({ _id : req.params.heroid }).then(dbres => {
        res.send(dbres)
    })
})

// UPDATE
// app.post("/update/:hid",(req,res)=>{
//     Hero.findByIdAndUpdate({_id : req.params.hid})
//     .then(dbRes =>{
//         dbRes.title = "Joker";
//         dbRes.save().then(updateRes => console.log("Hero info updated"))
//     })
//     .catch(error=>errorHandler);
// })
app.post("/update/:hid", (req, res)=>{
    console.log("update request recived")
   Hero.findByIdAndUpdate({_id : req.params.hid})
  .then(dbRes=>{
    console.log(dbRes);
        dbRes.title = req.body.title;
        dbRes.firstname = req.body.firstname;
        dbRes.lastname = req.body.lastname;
        dbRes.save().then(updateRes=>res.send({ message : "hero info updated"} ))
  })
  .catch(error=>errorHandler);
})

// DELETE
app.delete("/delete/:hid",(req, res)=>{
    Hero.findByIdAndDelete({ _id : req.params.hid })
    .then(dbRes => res.send({ message : "hero deleted", hero : dbRes.title}))
});

app.get("/data",(req,res)=>{
    Hero.find().then(dbres=>res.json(dbres))
})

app.listen(config.port,config.host,errorHandler);
console.log("server is now ready on localhost:2525")
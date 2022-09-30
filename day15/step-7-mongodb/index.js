const express = require("express")
const mongoose = require("mongoose");
const cors =require("cors")
// mongodb+srv://archies_004:archies_04@cluster0.xmo49qm.mongodb.net/?retryWrites=true&w=majority
let app = express();
app.use(express.json())


let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId

let url = "mongodb+srv://archies_004:archies_04@cluster0.xmo49qm.mongodb.net/valtechdb?retryWrites=true&w=majority"

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title : String,
    firstname :String,
    lastname :String
}));


mongoose.connect(url).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("Error",err)
})

app.get("/",(req,res)=>{
    Hero.find().then(dbres=>{
        res.json(dbres)
    })
    // res.send()
})

app.listen(8080,"localhost",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Server is liver on localhost : 8080")
    }

})
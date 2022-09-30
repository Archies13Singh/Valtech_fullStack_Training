const { urlencoded } = require("express")
var path = require("path")
var express = require("express")
var app = express()

app.use(express.static(path.join(__dirname,"public"))) // these will help to load the static files 
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/',(req,res)=>{
    console.log(req.body)
})





app.listen(6061,"localhost",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("server is now live on localhost : 6061")
    }
})
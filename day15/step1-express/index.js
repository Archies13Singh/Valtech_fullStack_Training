var express = require("express")

const app = express()
var port = process.env.PORT || 5001


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/public/about.html")

})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")

})

app.listen(port,"localhost",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log(`server is now live on localhost : ${port}`)
    }
})
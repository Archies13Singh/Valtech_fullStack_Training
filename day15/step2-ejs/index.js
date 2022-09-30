var express = require("express")

const app = express()
var port = process.env.PORT || 5001


app.get("/",(req,res)=>{
    res.render("index.ejs",{
        compname : "Valtech"
    })
})
app.get("/about",(req,res)=>{
    res.render("about.ejs",{
        compname : "Valtech"
    })

})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs",{
        compname : "Valtech"
    })
})

app.listen(port,"localhost",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log(`server is now live on localhost : ${port}`)
    }
})
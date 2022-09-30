var express = require("express")

const app = express()
var port = process.env.PORT || 5001

app.set("views","templates")

app.get("/",(req,res)=>{
    res.render("index.pug",{
        compname : "Valtech India"
    })
})
app.get("/about",(req,res)=>{
    res.render("about.pug",{
        compname : "Valtech India"
    })

})
app.get("/contact",(req,res)=>{
    res.render("contact.pug",{
        compname : "Valtech India"
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
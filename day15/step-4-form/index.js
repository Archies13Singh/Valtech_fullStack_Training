var express = require("express")

const app = express()
var port = process.env.PORT || 5001
herolist = []
app.use(express.urlencoded({extended : true}))
app.get('/',(req,res)=>{
    res.render("index.ejs",{
        compname : "Valtech India",
        herolist : herolist
    })
})

app.post("/",(req,res)=>{
    herolist.push(req.body.nhero)
    res.redirect("/")
    res.end()
})

app.listen(port,"localhost",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log(`server is now live on localhost : ${port}`)
    }
})
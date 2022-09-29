const http = require("http")


let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : "text/html"})
    // res.writeHead(200,{'Content-Type' : "text/plain"})
    res.write("<h1>Welcome to your life</h1>")

    // console.log(req)
    res.end()
})

server.listen(1010,'localhost',function(error){
    if(error){
        console.log("Error",error)
    }
    else{
        console.log("server is now live on localhost:1010")
    }
})
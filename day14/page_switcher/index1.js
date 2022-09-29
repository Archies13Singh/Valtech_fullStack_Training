var http = require("http")
var fs = require("fs")


var server  = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/' || req.url == '/index.html'){
        let htmlcontent = fs.readFileSync("./index.html","utf-8")
        res.writeHead(200,{
            'Context-Type' : 'text/html'
        })
        res.write(htmlcontent)
        res.end()
    }
    else if(req.url === '/about.html'){
        let htmlcontent = fs.readFileSync("./about.html","utf-8")
        res.writeHead(200,{
            'Context-Type' : 'text/html'
        })
        res.write(htmlcontent)
        res.end()
    }
    else if(req.url === '/contact.html'){
        let htmlcontent = fs.readFileSync("./contact.html","utf-8")
        res.writeHead(200,{
            'Context-Type' : 'text/html'
        })
        res.write(htmlcontent)
        res.end()
    }
    else{
        res.writeHead(404,{
            'Context-Type' : 'text/html'
        })
        res.write("Requested link is not wrong")
        res.end()
    }
})


server.listen(2022,'localhost',function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Server is now live on localhost : 2022")
    }
})
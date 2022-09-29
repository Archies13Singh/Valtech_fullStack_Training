var http = require("http")
var fs = require("fs")


var compname = "Valtech"
var server = http.createServer((req,res)=>{

    if(req.url == '/favicon.ico'){
        res.write()
        res.end()
    }else if(req.url == '/'){
        let htmlcontent = fs.readFileSync("./index.html","utf-8");
        res.writeHead(200,{
            'Context-Type' : "text/html"
        });
        res.write(htmlcontent.replace("{compare}",compname).replace("{compare}",compname))
        res.end()
    }else{
        fs.readFile("./"+req.url,"utf-8",(error,data)=>{
            if(error){
                res.writeHead(404,{
                    'Context-Type' : "text/html"
                });

                res.end("<h1> Sorry Wrong Page Requested </h1>")
            }
            else{
                res.writeHead(200,{
                    'Context-Type' : "text/html"
                });
                res.write(data.replace("{compare}",compname).replace("{compare}",compname))
                res.end()
            }
        })
    }
})


server.listen(2021,function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Server is live in localhost: 2021")
    }
})
const fs = require("fs")

fs.writeFileSync("temp.txt","Hello , This is Archies Singh",'utf-8')

fs.readFile("temp.txt","utf-8",function(error,data){
    if(error){
        console.log("Error ",error)
    }
    else{
        console.log(data)
    }
})
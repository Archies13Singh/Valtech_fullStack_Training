const axios = require("axios").default
const fs = require("fs")

axios.get("https://www.npmjs.com/package/axios").then(
    res=>fs.writeFileSync("temp/temp.html",res.data,"utf-8")
).catch(error=>console.log(error))



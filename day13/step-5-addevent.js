const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();

var a = 1000
myEvent.addListener("valtech", function(){
    console.log("Valtech Event Happened")
});

setInterval(function(){
    myEvent.emit("valtech")
    setTimeout(function(){
   
    },5000)
},1000)



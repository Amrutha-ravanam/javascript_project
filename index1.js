var express = require("express");
var app = express();
app.get('/',function(req,resp){
    resp.send("Hello from API");
});
//app.get('/Wishes/:name',function(req,resp){
    //var name = req.params.name;
    //resp.send(`Hello ${name}`);
//})
app.get('/square/:n',function(req,resp){
    var n = req.params.n;
    resp.send(`square of ${n} is: ${n*n}`)
});
app.get('/addition/:a/:b',function(req,resp){
    var a = Number(req.params.a);
    var b = Number(req.params.b);
    var c = a+b;
    resp.send(`Add of ${a} and ${b} is: ${c}`);
})
app.listen(9000, ()=>console.log("API started listening..."))
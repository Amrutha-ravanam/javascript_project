var express = require ("express");
var app = express();
app.get('/',function(req,resp) {
    resp.send("Hello from API");
});
app.get('/time',function(req,resp){
    var time = new Date().toLocateTimeString();
    resp.send(`Time is: ${time}`);
});
app.get('/Date',function(req,resp){
    var Date = new Date().toLocateDateString();
    resp.send(`Date is: ${Date}`);
})

app.listen(9000,()=>console.log("API started Listening..."));
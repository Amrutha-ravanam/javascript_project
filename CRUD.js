var express = require ("express");
var app = express();

app.use(express.json());

let users = [
    {id: 1,name: "Ali", age: 25},
    {id: 2,name: "sara",age: 22}
];

//post user
app.post("/users",(req,res) => {
    const newUser = {
        id:
        users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    res.send(newUser);
});
app.listen(9000,()=>console.log("API started Listening..."));
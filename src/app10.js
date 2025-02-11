const express = require("express");

const app = express();

app.use("/user",(req,res,next) =>{
    console.log("Handling the route user..!");
    next();
},
(req,res) =>{
    console.log("Handling the route user2..!");
    res.send("responce1...!");

},
(req,res) =>{
    console.log("Handling the route user2..!");
    res.send("responce2...!");
},
(req,res) =>{
    console.log("Handling the route user2..!");
    res.send("responce3...!");
}
)

app.listen(3000, () =>{
    console.log("Server is suucessfully listening on port 3000")
});
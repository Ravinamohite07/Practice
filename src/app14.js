const express = require("express");

const app = express();

//GET /user
app.use("/",(req,res) =>{
    res.send("handling /")
})


app.get("/user",(req,res,next) =>{
    console.log("Handling the route user..!");
    //res.send("response")
    next();
},
(req,res,next) =>{
    console.log("Handling the route user2..!");
    //res.send("responce1...!");
    next();

},
(req,res,next) =>{
    console.log("Handling the route user2..!");
    //res.send("responce2...!");
    next();
},
(req,res,next) =>{
    console.log("Handling the route user2..!");
    res.send("responce3...!"); 
}
)

app.listen(3000, () =>{
    console.log("Server is suucessfully listening on port 3000")
});
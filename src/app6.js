const express = require("express");

const app = express();

app.use("/user",(req,res) =>{
    console.log("Handling the route user..!");
    //res.send("responce...!");

},
(req,res) =>{
    console.log("Handling the route user2..!");
    res.send("responce2...!");

}
)

app.listen(3000, () =>{
    console.log("Server is suucessfully listening on port 3000")
});
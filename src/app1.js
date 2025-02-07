const express = require("express");

const app = express();


//app.use("/",(req,res)=>{
 //   res.send("hello from /");
//})

app.use("/test",(req,res)=>{
    res.send("test...!");
})


app.use("/hello",(req,res)=>{
    res.send("hello...!");
})



app.listen(7777,() =>{
console.log("server listen on port 7777...")
})
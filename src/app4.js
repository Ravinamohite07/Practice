const express = require("express");

const app = express();

app.use("/user",(req,res) =>{
    res.send("handled all the methods...!")
})

//This wil only handle GET call to /user
app.get("/user",(req,res) =>{
    res.send({firstname:"ravina",lastName:"Mohite"})
})

app.post("/user",(req,res)=>{
    console.log("saved the data in the database");
    res.send("data saved successfully in the database")
})

app.delete("/user",(req,res) =>{
    res.send("data delated successfully...!");
})

//This will match  all the http method api call
app.use("/test", (req,res) =>{
    res.send("hello from the server...!")

})


app.listen(3000, () =>{
    console.log("Server is suucessfully listening on port 3000")
});
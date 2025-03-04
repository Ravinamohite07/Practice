const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/users");
const { validateSignupData } = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json())

app.post("/signup",async (req,res) =>{
     try{
        //validation the data
    validateSignupData(req);
    const{firstName, lastName, emailId, password} = req.body;
    //Encrypt the password
    const passwordHash = await bcrypt.hash(password,10);
    console.log(passwordHash);
    //console.log(req);
    //console.log(req.body);
    // creating new instance of user model
     const user = new User({
        firstName,
        lastName,
        emailId,
        password:passwordHash
     });
        await user.save();
     res.send("user added successfully..!") 
     }catch(err){
        res.status(400).send("Error saving the user:" + err.message);
        console.error(err);
     }; 
}); 

app.post("/login",async (req,res) => {
    try {
        const{emailId,password} = req.body;
        const user = await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("Invalid credentials");
        }
        const ispasswordValid = await bcrypt.compare(password,user.password);
        if(ispasswordValid){
            res.send("user successfully login...!");
        } else {
            throw new Error("password not correct..!");
        }
         
    } catch(err){
        res.status(400).send("Error:" + err.message);
    };
})

app.delete("/user",async (req,res) => {
    const userId = req.body.userId;
    try{
        const user =  await User.findByIdAndDelete(userId);
        res.send("User deleted successfully..!");
    }catch (err) {

        res.status(400).send("Something went wrong...!");

    }
})

//GET user by lastName
app.get("/user", async (req,res) =>{
    const userLastname = req.body.lastName;
    try{

       const users = await User.findOne({lastName: userLastname});
       res.send(users);
       //if(users.length === 0){
           //res.status(404).send("user not found")
       //}else{
        //res.send(users);
       //}
       
    }catch (err) {

        res.status(400).send("Something went wrong...!");

    }
});

//feed API - GET/feed - get all the users from the database
app.get("/feed",async (req,res) => {
    try{

        const users = await User.find({});
        res.send(users);

    } catch (err) {
        
        res.status(400).send("Something went wrong...!");
        
    }
}) 

connectDB()
  .then(() =>{
     console.log("Database connection established...!");
     app.listen(3000,() => {
        console.log("Server successfully run on port 3000..!");
    })
  }).catch((err) => {
     console.log("Database cannot connection established..!!");
  });


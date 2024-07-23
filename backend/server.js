// express multer cors mongoose  
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true }));

//mongoose.connect("mongodb://0.0.0.0:27017/MERN");

app.post('/login',(req,res)=>{

    console.log(req.body);
    res.json(req.body);
   

})
app.listen(3001, () => {
    console.log("server is running");
  });
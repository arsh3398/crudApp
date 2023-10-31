const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./src/Students/routes/studentRoutes');
const cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 5000;
const url = "mongodb://127.0.0.1:27017/StudentsDatabase"

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})    
.then(()=>{
    console.log("Connected to DB")
})
.catch((err)=>{
    console.log("Error connecting to DB",err)
})

app.listen(port,(err)=>{
    if(err){
        console.log("error in connecting port",err);
    }
    else{
        console.log("port connected");
    }
    
});
app.use(express.json());
app.use(routes);
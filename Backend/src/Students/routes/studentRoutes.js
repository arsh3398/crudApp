const express = require('express');
const router = express.Router();
let studentModel = require('../Model/studentModel');
//create record
router.post('/students/create',async (req,res)=>{
    let student = new studentModel(req.body);
    try{
        await student.save();
        res.status(201).send(
            {
                "status":true,
                "message":"Student data created"
            });
    }
    catch(err){
        res.status(400).send(err);
    }
});
//read record
router.get('/students/read',async (req,res)=>{
    try{
        let student = await studentModel.find({});
        res.status(200).send(student);
    }
    catch(err){
        res.status(400).send(err);
    }
});
//find record
router.get('/students/:id',async (req,res)=>{
    try{
        const _id = req.params.id;//here "/students/:id" is the request.
        let student = await studentModel.findById({_id});
        if(!student){
            return res.status(400).send();
        }
        else{
            res.status(200).send(student);
        };
    }
    catch(err){
        res.status(400).send(err);
    }
});
//update record
router.put('/students/update/:id',async (req,res)=>{
    try{
        const _id = req.params.id;//here "/students/:id" is the request.
        let student = await studentModel.findByIdAndUpdate(_id,req.body);
        res.status(200).send({
            "status" : true,
            "message" : "Student Updated!!!!!!!!!!!!!!!!"
        });
    }
    catch(err){
        res.status(400).send(err);
    }
});
//delete record
router.delete('/students/delete/:id',async (req,res)=>{
    try{
        const _id = req.params.id;//here "/students/:id" is the request.
        let student = await studentModel.findByIdAndDelete(_id,req.body);
        if(!student)
        {
            return res.status(404).send();
        }  
       
        res.status(201).send(
            {
                "status" : true,
                "message" : "Student Deletedd!!!!!!!!!!!!!!!!"
            });
    }
    catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;
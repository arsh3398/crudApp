const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
    });

module.exports = mongoose.model('student',StudentSchema);//'student' here works as a table and StuentSchema contains objects that will serve as columns.
const mongoose = require('mongoose')

const collegeModel = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is required !"],
        unique: true,
        trim: true
    },
    fullName:{
        type:String,
        required: [true,"fullName is required !"],
        trim: true
    },
    logoLink:{
        type:String,
        required: [true,"logoLink is required !"],
        trim: true
    },
    isDeleted:{ 
        type:Boolean,
       default:false
},
});

module.exports = mongoose.model('college', collegeModel)
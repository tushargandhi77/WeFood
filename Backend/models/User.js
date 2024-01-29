
const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user',UserSchema)
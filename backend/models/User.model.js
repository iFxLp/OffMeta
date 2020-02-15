const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        trim:true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        trim:true,
        minlength:3
    },
    email:{
        type: String,
        required: true,
        trim:true,
        minlenth: 3
    },
    /*ProfileImage:{
        type: String,
        required: true,
        trim:true,
        minlenth: 3
    },*/
   /* Date:{
       type: Date,
        required:true,
        trim: true,
        minlength: 3
   },*/
   /* firstname:{
        type: String,
        required: true,
        trim:true,
        minlenth: 3
    },
    lastname:{
        type: String,
        required: true,
        trim:true,
        minlenth: 3
    },*/
},{
    timestamps: true,
});

const user = mongoose.model('User',userSchema);

module.exports = user;
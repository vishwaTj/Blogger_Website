const mongoose = require('mongoose');

const {Schema} = mongoose;

const BlogSchema = new Schema({
     name:{
        type:String,
        required:true
     },
     userID:{
        type:String,
        required:true
     },
     Title:{
        type:String,
        require:true
     },
     Content:{
        type:String,
        required:true
     },
     img:
     {
       data: Buffer,
       contentType: String
     },
     Date:{
        type:Date,
        default:Date.now
     }
})

module.exports = mongoose.model('Blog',BlogSchema);



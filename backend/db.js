const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Blogger:ukQ0LPB7xQEods1f@cluster0.k7vpspy.mongodb.net/BloggerData?retryWrites=true&w=majority';
const mongoDB = ()=>{
  mongoose.connect(mongoURI,{useNewUrlParser : true})
        .then((res)=>{
            console.log("connected");
        }).catch((err)=>{
            console.log(`Error connecting ${err}`);
        })

}


module.exports=mongoDB;




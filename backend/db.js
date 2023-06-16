const mongoose = require('mongoose');
require('dotenv').config();
 
const mongoDB=()=>{mongoose.connect("mongodb://localhost/Blogger_Website")
.then(console.log("DB Connected"))}
// const mongoDB = ()=>{
//   mongoose.connect(mongoURI,{useNewUrlParser : true})
//         .then((res)=>{
//             console.log("connected");
//         }).catch((err)=>{
//             console.log(`Error connecting ${err}`);
//         })


// }


module.exports=mongoDB;




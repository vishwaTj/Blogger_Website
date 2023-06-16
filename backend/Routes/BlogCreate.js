const express = require('express');
const router = express.Router();
const Blog = require("../models/Blog");
const {body, validationResult} = require('express-validator');
var fs = require('fs');
var path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, 'uploads');
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const fileExtension = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
   }
 });

 
var upload = multer({storage});


router.get("/fetchBlog",
    async(req,res)=>{
     try{
        let BlogData = await Blog.find();
        if(!BlogData){
            return res.status(400).json({errors: "Error fetching Blog content Mongo DB atlas"})
        }
        res.json({success:true,data:BlogData})
     }catch(error){
        console.log(error);
        res.json({success:false});
     }  
    }
)




router.post("/createblog",upload.single('image'),
     async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()})
        }
        try{
         console.log("We are here");
         var obj = {
             name:req.body.name,
             userID:req.body.userID,
             Title:req.body.Title,
             Content:req.body.Content,
             img:{
               data: fs.readFileSync(path.join(__dirname , '..' , 'uploads' , req.file.filename)),
               contentType: 'image/png'
             }
         }
           await Blog.create({...obj})
           .then((data)=>{
            console.log("Successfully uploaded");
           })
           .catch((err)=>{
            console.log(`there is an error : ${err}`)
           })
           .then((data,err)=>{
              if(err){
                console.log(`Error in uploading ${err}`);
              }
           })
           res.json({success:true})
        }
        catch(error){
           console.log(error);
           res.json({success:false})
        }
     })

router.post("/deleteBlog",
      async(req,res)=>{
        try{
          let blog = await Blog.findById(req.body.id);
          console.log(blog);
          blog.deleteOne();
          res.json({success:true})
        }
        catch(error){
            console.log(error);
           res.json({success:false})
        }
     }
)    


router.post("/FetchOne",
      async(req,res)=>{
         console.log("I got called");
         try{
         let blog = await Blog.findById(req.body.id);
         console.log(blog);
         res.json({success:true,blogData:blog})
         }
         catch(error){
            console.log(error);
            res.json({success:false})
         }
      }
)


module.exports = router;     
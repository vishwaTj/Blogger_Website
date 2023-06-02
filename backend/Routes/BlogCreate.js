const express = require('express');
const router = express.Router();
const Blog = require("../models/Blog");
const {body, validationResult} = require('express-validator');

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


router.post("/createblog",[
     body('Content').isLength({min:5})],
     async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()})
        }

        try{
           await Blog.create({
             name:req.body.name,
             userID:req.body.userID,
             Title:req.body.Title,
             Content:req.body.Content
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
      // console.log("Igot called")
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
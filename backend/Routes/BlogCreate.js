const express = require('express');
const router = express.Router();
const Blog = require("../models/Blog");
const {body, validationResult} = require('express-validator');

router.get("/fetchBlog",
    async(Req,res)=>{
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

module.exports = router;     
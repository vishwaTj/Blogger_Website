const express = require('express');
const router = express.Router();
const Blog = require("../models/Blog");
const {body, validationResult} = require('express-validator');

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
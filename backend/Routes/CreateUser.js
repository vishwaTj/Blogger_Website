const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');

router.post('/createuser',[
        body('email','Incorrect email').isEmail(),
        body('name','Name should have more than 5 chars').isLength({min:5}),
        body('password','Incorrect password').isLength({min:5})] 
        ,async (req,res)=>{

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array()})
            }
        try{
            await User.create({
                    name:req.body.name,
                    password:req.body.password,
                    email:req.body.email,
                    Bio:req.body.Bio

            })
            res.json({success:true});
        }catch(error){
            console.log(error);
            res.json({success:false});
        }
})


router.post('/loginuser',[
    body('email','Incorrect email').isEmail(),
    body('password','Incorrect password').isLength({min:5})] 
    ,async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()})
        }

    let email= req.body.email;
    try{
      let userData =   await User.findOne({email})
      if(!userData){
        return res.status(400).json({errors: "Try loggin in with correct credentials"})
      }
      if(req.body.password !== userData.password){
        return res.status(400).json({errors: "Try loggin in with correct credentials"})
      }
      res.json({success:true,user:userData});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})


module.exports = router;





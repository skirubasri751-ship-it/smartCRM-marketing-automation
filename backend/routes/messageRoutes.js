const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.post("/", async(req,res)=>{

  try{

    const newMessage = new Message(req.body);

    await newMessage.save();

    res.json({
      success:true,
      message:"Message Sent"
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:"Server Error"
    });

  }

});

module.exports = router;
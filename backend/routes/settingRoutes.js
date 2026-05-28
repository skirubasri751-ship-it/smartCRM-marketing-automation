const express = require("express");
const router = express.Router();

const Setting = require("../models/Setting");

router.post("/", async(req,res)=>{

  try{

    const newSetting = new Setting(req.body);

    await newSetting.save();

    res.json({
      success:true,
      message:"Settings Saved"
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:"Server Error"
    });

  }

});

module.exports = router;
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
router.put("/:id", async (req, res) => {

  try {

    const updated =
      await Setting.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updated);

  } catch (error) {

    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {

  try {

    await Setting.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Setting Deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {

  try {

    const settings = await Setting.find();

    res.json(settings);

  } catch (error) {

    res.status(500).json(error);
  }
});

module.exports = router;
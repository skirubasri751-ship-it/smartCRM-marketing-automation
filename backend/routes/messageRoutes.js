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
router.put("/:id", async (req, res) => {

  try {

    const updated =
      await Message.findByIdAndUpdate(
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

    await Message.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Message Deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {

  try {

    const messages = await Message.find();

    res.json(messages);

  } catch (error) {

    res.status(500).json(error);
  }
});

module.exports = router;
const express = require("express");
const router = express.Router();

const Staff = require("../models/Staff");

router.get("/", async (req, res) => {

  try {

    const uiDesigner = await Staff.countDocuments({
      role: { $regex: /ui designer/i }
    });

    const marketingLead = await Staff.countDocuments({
      role: { $regex: /marketing lead/i }
    });

    const developer = await Staff.countDocuments({
      role: { $regex: /developer/i }
    });

    const sales = await Staff.countDocuments({
      role: { $regex: /sales/i }
    });

    res.json({
      uiDesigner,
      marketingLead,
      developer,
      sales
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
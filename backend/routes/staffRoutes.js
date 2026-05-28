const express = require("express");

const router = express.Router();

const Staff = require("../models/Staff");

/* GET ALL STAFF */

router.get("/", async (req, res) => {

  try {

    const staffs = await Staff.find();

    res.json(staffs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

/* ADD STAFF */

router.post("/", async (req, res) => {

  try {

    const newStaff = new Staff({

      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      department: req.body.department

    });

    const savedStaff = await newStaff.save();

    res.status(201).json(savedStaff);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;
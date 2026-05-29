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
router.put("/:id", async (req, res) => {

  try {

    const updated = await Staff.findByIdAndUpdate(
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

    await Staff.findByIdAndDelete(req.params.id);

    res.json({
      message: "Staff Deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});

module.exports = router;
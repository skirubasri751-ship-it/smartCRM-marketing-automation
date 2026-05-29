const express = require("express");
const router = express.Router();

const Client = require("../models/Client");
const Staff = require("../models/Staff");
const Task = require("../models/Task");
const Message = require("../models/Message");
const User = require("../models/User");

router.get("/", async (req, res) => {

  try {

    const clientsCount = await Client.countDocuments();

    const staffCount = await Staff.countDocuments();

    const tasksCount = await Task.countDocuments();

    const contactsCount = await Message.countDocuments();

    const usersCount = await User.countDocuments();

    res.json({
      clientsCount,
      staffCount,
      tasksCount,
      contactsCount,
      usersCount
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
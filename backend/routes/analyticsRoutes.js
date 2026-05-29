const express = require("express");
const router = express.Router();

const Client = require("../models/Client");
const Staff = require("../models/Staff");
const Task = require("../models/Task");
const Message = require("../models/Message");

router.get("/", async (req, res) => {
  try {
    const totalClients = await Client.countDocuments();

    const totalStaff = await Staff.countDocuments();

    const totalTasks = await Task.countDocuments();

    const totalMessages = await Message.countDocuments();

    const completedTasks = await Task.countDocuments({
      status: "Completed"
    });

    const pendingTasks = await Task.countDocuments({
      status: "Pending"
    });

    res.json({
      totalClients,
      totalStaff,
      totalTasks,
      totalMessages,
      completedTasks,
      pendingTasks
      });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
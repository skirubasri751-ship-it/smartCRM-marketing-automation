const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});
router.put("/:id", async (req, res) => {

  try {

    const updated = await Task.findByIdAndUpdate(
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

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});
router.post("/", async (req, res) => {

  try {

    const newTask = new Task(req.body);

    const savedTask = await newTask.save();

    res.json(savedTask);

  } catch (error) {

    res.status(500).json(error);
  }
});
router.put("/:id", async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json(error);
  }
});
router.delete("/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});
module.exports = router;
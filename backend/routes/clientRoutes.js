const express = require("express");
const router = express.Router();

const Client = require("../models/Client");

router.post("/", async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Error Adding Client" });
  }
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client Deleted" });
});
router.delete("/:id", async (req, res) => {

  try {

    await Client.findByIdAndDelete(req.params.id);

    res.json({
      message: "Client Deleted"
    });

  } catch (error) {

    res.status(500).json(error);
  }
});
router.put("/:id", async (req, res) => {

  try {

    const updated = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json(error);
  }
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const staffRoutes = require("./routes/staffRoutes");
const taskRoutes = require("./routes/taskRoutes");
const messageRoutes = require("./routes/messageRoutes");
const settingRoutes = require("./routes/settingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/settings", settingRoutes);

module.exports= app;
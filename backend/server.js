const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const staffRoutes = require("./routes/staffRoutes");
const taskRoutes = require("./routes/taskRoutes");
const messageRoutes = require("./routes/messageRoutes");
const settingRoutes = require("./routes/settingRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const teamRoutes = require("./routes/teamRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

/* Connect Database */
connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/dashboard", dashboardRoutes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("SmartCRM Backend Running");
});

/* Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
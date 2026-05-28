const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({

  companyName:String,

  businessEmail:String

});

module.exports = mongoose.model(
  "Setting",
  settingSchema
);
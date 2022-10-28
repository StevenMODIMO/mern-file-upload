const mongoose = require("mongoose");

// file Schema
const fileSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
});

// user model and exports
module.exports = mongoose.model("File", fileSchema);

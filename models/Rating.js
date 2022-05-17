const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  rate: {
    type: Number,
    require: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Rating", ratingSchema);

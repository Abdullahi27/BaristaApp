const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  coffeeSelected: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  isCompleted: { 
    type: String,
    required: true,
    default: 'uncomplete'
  },
  customerName: { 
    type: String,
    required: true,
  },
  employee: { 
    type: String,
    required: true,
    default: " "
  }
});

module.exports = mongoose.model("orders", PostSchema);

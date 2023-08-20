const mongoose = require("mongoose");

const subS = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    status: {
      type: String,
      required: [true, "amount is required"],
    },
    amount: {
      type: String,
      required: [true, "amount is required"],
    },
  },
  { timestamps: true }
);

const userSubs = mongoose.model("subscribers", subS);
module.exports = userSubs;

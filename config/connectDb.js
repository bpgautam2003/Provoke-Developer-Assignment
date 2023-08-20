const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/subscription");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// db.once("open", function () {
//   console.log("Connected to Database :: MongoDB");
// });

// module.exports = db;
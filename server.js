const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
// const path = require("path");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//port
const PORT = 8080 || process.env.PORT;

app.post("/api/v1/webhook", (req, res) => {
  const details = req.body;
  if (details.type == "checkout.session.completed") {
    console.log(details);
    const username = details.data.object.client_reference_id;
    const status = details.data.object.payment_status;
    const amount = details.data.object.amount_total / 100;

    const data = {
      username: username,
      payment_status: status,
    }

    if (amount == 100) {
      data.planType = "Mobile";
    } else if (amount == 200) {
      data.planType = "Basic";
    } else if (amount == 500) {
      data.planType = "Standard";
    } else {
      data.planType = "Premium";
    }

    console.log(data);
  }
  res.send("ok");
})

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

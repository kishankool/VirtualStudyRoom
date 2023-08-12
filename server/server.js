const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// const authRoutes = require("./routes/auth");
// const messageRoutes = require("./routes/messages");
const app = express();


app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
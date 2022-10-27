require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const mainRouter = require("./routes/main");

// middleware
app.use(express.json());

// routes
app.use("/", mainRouter);
app.use("/register", mainRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

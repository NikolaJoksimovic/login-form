require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");

// routes
const mainRouter = require("./routes/main");
app.use("/", mainRouter);

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // Testing connection to db..
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

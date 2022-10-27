require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const mainRouter = require("./routes/main");
const errorHandlerMiddleware = require("./midleware/error-handler");
const notFound = require("./midleware/not-found");

app.use(express.json());

// routes
app.use("/", mainRouter);
app.use("/register", mainRouter);

// middleware
app.use(errorHandlerMiddleware);
app.use(notFound);

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

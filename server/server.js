require("dotenv").config();
const express = require("express");
const app = express();

// database connection
const connectDB = require("./db/connectDB");
// router
const mainRouter = require("./routes/main");
// middleware functions
const errorHandlerMiddleware = require("./midleware/error-handler");
const notFound = require("./midleware/not-found");

app.use(express.json());

// routes
app.use("/", mainRouter);
app.use("/home", mainRouter);
app.use("/register", mainRouter);
app.use("/login", mainRouter);

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

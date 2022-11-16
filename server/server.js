require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");

// database connection
const connectDB = require("./db/connectDB");
// router
const mainRouter = require("./routes/main");
const dashRouter = require("./routes/dashboard");
// middleware functions
const notFound = require("./midleware/not-found");
const errorHandlerMiddleware = require("./midleware/error-handler");
const authenticationMiddleware = require("./midleware/authentication");

app.use(express.static("public/build"));
app.use(express.json());
app.use(cors());

// routes
app.use("/", mainRouter);
app.use("/dashboard", authenticationMiddleware, dashRouter);
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/build/index.html");
});

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

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

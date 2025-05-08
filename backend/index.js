// 1 import all libraries.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken"); // For token verification
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const userRoutes = require("./routes/UserRoutes");

// 2. give a name to your api backend. app = express()
dotenv.config();

const app = express();
// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Replace with your frontend's URL
    credentials: true, // Enable credentials
  })
);

app.use(express.json()); // Add this middleware to parse JSON request body
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// === ROUTES ===
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// === DB CONNECTION ===
const PORT = process.env.PORT;

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/safety_app";

// 9 . connect to mongodb.
mongoose
  .connect("mongodb://127.0.0.1:27017/safety_app")
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((err) => {
    console.log("Connection to mongodb failed,", err);
  });

// 10. app.listen(port)
app.listen(PORT, () => {
  console.log(`Connected to server successfully at port number ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const fileRoute = require("./routes/file");

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/uploads", express.static("uploads"));
app.use("/api", fileRoute);

// serve and database connection
app.listen(process.env.PORT, () => console.log(`htpp://localhost:${process.env.PORT}`))
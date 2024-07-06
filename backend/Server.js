const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://ahmedMustafa:A010@cluster0.mn2ynsk.mongodb.net/Gallery?retryWrites=true&w=majority&appName=Cluster0', () => {
  console.log("MonoDB Connected...");
});

app.use(UploadRoute);

app.listen(5000, () => {
  console.log(`Server started at port: 5000`);
});

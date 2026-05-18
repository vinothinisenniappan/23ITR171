const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/vehicleDB")
.then(() => {
    console.log("MongoDB Connected");
});
app.use("/", require("./routes/vehicleRoutes"));
app.get("/", (req, res) => {
    res.send("Backend Working");
});
app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});
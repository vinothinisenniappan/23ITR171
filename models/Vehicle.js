const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
    vehicleName: String,
    duration: Number,
    impact: Number
});
module.exports = mongoose.model("Vehicle", vehicleSchema);
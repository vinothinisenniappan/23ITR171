const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");
router.get("/vehicles", async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json({
        vehicles
    });
});
router.post("/add", async (req, res) => {
    const newVehicle = new Vehicle({
        vehicleName: req.body.vehicleName,
        duration: req.body.duration,
        impact: req.body.impact
    });
    const savedVehicle = await newVehicle.save();
    res.json(savedVehicle);
});
router.put("/update/:id", async (req, res) => {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedVehicle);
});
router.delete("/delete/:id", async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({
        message: "Vehicle Deleted"
    });
});
module.exports = router;
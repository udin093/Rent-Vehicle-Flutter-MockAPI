const vehicleModel = require('../models/vehicle');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleModel.getVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVehicle = async (req, res) => {
  const { brand_id, name, year, description, price_per_day } = req.body;
  try {
    const newVehicle = await vehicleModel.createVehicle(brand_id, name, year, description, price_per_day);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getVehicles, createVehicle };
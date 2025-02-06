const vehicleModel = require('../models/vehicle');
const upload = require('../utils/upload');

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
  const image_url = req.file ? req.file.path : null; // Ambil path gambar

  try {
    const newVehicle = await vehicleModel.createVehicle(brand_id, name, year, description, price_per_day, image_url);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getVehicles, createVehicle: [upload.single('image'), createVehicle] };
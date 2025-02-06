const rentalModel = require('../models/rental');

const createRental = async (req, res) => {
  const { user_id, vehicle_id, start_date, end_date, total_price } = req.body;
  try {
    const newRental = await rentalModel.createRental(user_id, vehicle_id, start_date, end_date, total_price);
    res.status(201).json(newRental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRentals = async (req, res) => {
  try {
    const rentals = await rentalModel.getRentals();
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRental, getRentals };
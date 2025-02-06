const brandModel = require('../models/brand');

const getBrands = async (req, res) => {
  try {
    const brands = await brandModel.getBrands();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const newBrand = await brandModel.createBrand(name);
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBrands, createBrand };
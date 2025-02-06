const pool = require('../config/db');

const getVehicles = async () => {
  const result = await pool.query('SELECT * FROM vehicles');
  return result.rows;
};

const createVehicle = async (brand_id, name, year, description, price_per_day, images_url) => {
  const result = await pool.query(
    'INSERT INTO vehicles (brand_id, name, year, description, price_per_day, images_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [brand_id, name, year, description, price_per_day, images_url]
  );
  return result.rows[0];
};

module.exports = { getVehicles, createVehicle };
const pool = require('../config/db');

const createRental = async (user_id, vehicle_id, start_date, end_date, total_price) => {
  const result = await pool.query(
    'INSERT INTO rentals (user_id, vehicle_id, start_date, end_date, total_price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [user_id, vehicle_id, start_date, end_date, total_price]
  );
  return result.rows[0];
};

const getRentals = async () => {
  const result = await pool.query('SELECT * FROM rentals');
  return result.rows;
};

module.exports = { createRental, getRentals };
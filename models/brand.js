const pool = require('../config/db')

const getBrands = async () => {
    const result = await pool.query('SELECT * FROM brands');
    return result.rows;
};

const createBrand = async (name) => {
    const result = await pool.query('INSERT INTO brands (name) VALUE ($1) RETURNING *', [name]);
    return result.rows[0];
} 

module.exports = {getBrands, createBrand}

const pool = require('../config/db');

const createChat = async (sender_id, receiver_id, message) => {
  const result = await pool.query(
    'INSERT INTO chats (sender_id, receiver_id, message) VALUES ($1, $2, $3) RETURNING *',
    [sender_id, receiver_id, message]
  );
  return result.rows[0];
};

const getChats = async () => {
  const result = await pool.query('SELECT * FROM chats');
  return result.rows;
};

module.exports = { createChat, getChats };
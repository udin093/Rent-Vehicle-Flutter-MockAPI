const chatModel = require('../models/chat');

const createChat = async (req, res) => {
  const { sender_id, receiver_id, message } = req.body;
  try {
    const newChat = await chatModel.createChat(sender_id, receiver_id, message);
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChats = async (req, res) => {
  try {
    const chats = await chatModel.getChats();
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createChat, getChats };
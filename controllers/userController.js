const userModel = require('../models/user');
const { generateToken } = require('../utils/jwt');

const registerUser = async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  try {
    const newUser = await userModel.createUser(name, email, phone, password, role);
    const token = generateToken(newUser);
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await userModel.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
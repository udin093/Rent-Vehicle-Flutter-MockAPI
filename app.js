//Entry for App

const express = require('express');
const cors = require('cors');
const brandRoutes = require('./routes/brandRoutes');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/brands', brandRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/chats', chatRoutes);
app.use('/images', express.static('/Users/khalid093/Documents/MyProject/Flutter/Vehicle-Rent-App/Images'));

module.exports = app;
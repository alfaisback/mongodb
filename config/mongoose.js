const mongoose = require('mongoose');
require('dotenv').config();

// /mongodb+srv://muhamadalfarizy20:2133@cluster0.a5hcrgf.mongodb.net/
const uri = process.env.MONGODB_URL;

mongoose.set('strictQuery', false);
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('Database connected successfully'));

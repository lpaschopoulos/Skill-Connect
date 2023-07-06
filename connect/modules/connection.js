const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

const db = mongoose.connect('mongodb+srv://loukas_pas:@cluster0.ahcnc1p.mongodb.net/skillconnect?retryWrites=true&w=majority'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;



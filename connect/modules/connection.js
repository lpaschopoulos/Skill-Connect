require('dotenv').config();
const mongoose = require ("mongoose");
var db = mongoose.connect(
    `mongodb+srv://loukas_pas:pO8aDqaPPZHS6ANs@cluster0.ahcnc1p.mongodb.net/skillconnect?retryWrites=true&w=majority`
    
    );


module.exports = db;

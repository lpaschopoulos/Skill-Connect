var db = require ("./connection.js");
const mongoose = require ("mongoose");

const Skill = mongoose.model ("Skill", {
    title: String,
    userId: String,
});

module.exports = Skill;
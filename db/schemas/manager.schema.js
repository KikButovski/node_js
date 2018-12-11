const {Schema} = require('mongoose');

exports.ManagerSchema = new Schema({
    lvl: String,
    salary: Number,
    multiplier: Number
});
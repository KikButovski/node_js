const {Schema} = require('mongoose');

exports.DeveloperSchema = new Schema({
    lvl: String,
    salary: Number,
    linesCount: Number
});
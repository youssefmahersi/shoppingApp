const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    select: [Object],
    name: {type: String},
    activity: {type: String},
    date: {type: Date}
})

const History = mongoose.model('History',historySchema,'History');
module.exports = History;
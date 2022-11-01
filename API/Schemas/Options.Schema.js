const mongoose = require('mongoose')
const deepPopulate = require('mongoose-deep-populate')(mongoose)
const findVisible = require('../findVisible')

const optionsSchema = new mongoose.Schema({
    name: {type: String},
    note: {type: String},
    image: {type: String, default: 'https://media.wired.com/photos/5c9040ee4950d24718d6da99/16:9/w_2400,h_1350,c_limit/shoppingcart-1066110386.jpg'},
    pcs: {type: Number, default: 1},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Sections'},
})

const population = [
    {
        path: 'category'
    }
]

optionsSchema.pre('find', findVisible(population))
optionsSchema.plugin(deepPopulate, {})

const Options = mongoose.model('Options',optionsSchema,'Options');
module.exports = Options;
const mongoose = require('mongoose')

const sectionsSchema = new mongoose.Schema({
    _id: {type: String},
    Type: {type: String}
})

const Sections = mongoose.model('Sections',sectionsSchema,'Sections')
module.exports = Sections
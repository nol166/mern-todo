const mongoose = require('mongoose')

// shorthand for only one key value pair is note: String
const itemSchema = new mongoose.Schema({
    note: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now() },
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item

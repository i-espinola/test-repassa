const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true, lowercase: true },
  feedback: { type: String, requerid: false }
})

// Export the model
module.exports = mongoose.model('Product', ProductSchema)

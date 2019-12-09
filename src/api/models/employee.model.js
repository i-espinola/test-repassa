import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true, lowercase: true },
  feedback: { type: String, requerid: false }
})

// Export the model
export default mongoose.model('Product', ProductSchema)

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: true, lowercase: true, trim: true, unique: true },
  feedback: { type: String, requerid: false }
})

export default mongoose.model('users', userSchema)

import Random from 'meteor-random'
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  _id: { type: String, default: () => Random.id(), required: true },
  name: { type: String, trim: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: new Date() }
})

export default schema

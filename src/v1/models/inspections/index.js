import Random from 'meteor-random'
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  _id: { type: String, default: () => Random.id(), required: true },
  name: { type: String, trim: true, required: true },
  inspector: { type: String, required: true },
  renter: { type: String, required: true },
  lessor: { type: String, required: true },
  type: { type: String, required: true },
  area: { type: Number, required: true },
  location: { lat: String, lng: String },
  dependencies: {
    generalObservations: { type: String, default: '' },
    dependenciesIds: Array
  },
  createdAt: { type: Date, default: new Date() }
})

export default schema

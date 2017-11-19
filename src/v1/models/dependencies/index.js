import mongoose from 'mongoose'
import Random from 'meteor-random'

import EnumHelper from '../../../../commons/EnumHelper'

const detailsSchema = new mongoose.Schema({
  _id: { type: String, default: () => Random.id(), required: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true }
})

const itemsSchema = new mongoose.Schema({
  _id: { type: String, default: () => Random.id(), required: true },
  name: { type: String, trim: true, required: true },
  condition: { type: Number, enum: EnumHelper.conditions.ALL, required: true },
  observations: { type: String, trim: true },
  images: {
    id: { type: String, required: true },
    path: { type: String, required: true }
  },
  details: [detailsSchema]
})

const schema = new mongoose.Schema({
  _id: { type: String, default: () => Random.id(), required: true },
  name: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: new Date() },
  items: [itemsSchema]
})

export default schema

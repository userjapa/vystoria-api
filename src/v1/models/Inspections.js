import mongoose from 'mongoose'

import inspectionsSchema from './inspections'

export default mongoose.model('inspections', inspectionsSchema)

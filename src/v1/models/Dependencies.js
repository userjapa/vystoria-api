import mongoose from 'mongoose'

import dependenciesSchema from './dependencies'

export default mongoose.model('dependencies', dependenciesSchema)

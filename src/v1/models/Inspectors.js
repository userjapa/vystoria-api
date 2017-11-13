import mongoose from 'mongoose'

import inspectorSchema from './inspector'

export default mongoose.model('inspectors', inspectorSchema)


import express from 'express'

import inspectorRoutes from './inspector'
import inspectionRoutes from './inspection'
import dependencyRoutes from './dependency'
import uploadRoutes from './upload'

const router = express.Router()

inspectorRoutes(router)
inspectionRoutes(router)
dependencyRoutes(router)
uploadRoutes(router)

export default router

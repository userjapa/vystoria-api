
import express from 'express'

import inspectorRoutes from './inspector'
import inspectionRoutes from './inspection'
import dependencyRoutes from './dependency'

const router = express.Router()

inspectorRoutes(router)
inspectionRoutes(router)
dependencyRoutes(router)

export default router

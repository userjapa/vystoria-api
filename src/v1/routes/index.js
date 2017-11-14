
import express from 'express'

import InspectorController from '../controllers/inspector'
import InspectionController from '../controllers/inspection'
import DependencyController from '../controllers/dependency'

const router = express.Router()

/**
 * Inspector routes
 */
router.get('/inspector', (req, res) => {
  const inspectorController = new InspectorController()
  const { id } = req.query
  id
    ? inspectorController.getInspectorById(id, res)
    : inspectorController.getInspectors(res)
})

router.post('/inspector', (req, res) => {
  const inspectorController = new InspectorController()
  inspectorController.createInspector(req.body, res)
})

/**
 * Inspection routes
 */
router.get('/inspection', (req, res) => {
  const inspectionController = new InspectionController()
  const { id } = req.query
  id
    ? inspectionController.getInspectionById(id, res)
    : inspectionController.getInspections(res)
})

router.post('/inspection', (req, res) => {
  const inspectionController = new InspectionController()
  inspectionController.createInspection(req.body, res)
})

/**
 * Dependency routes
 */
router.get('/dependency', (req, res) => {
  const dependencyController = new DependencyController()
  const { id } = req.query
  id
    ? dependencyController.getDependencyById(id, res)
    : dependencyController.getDependencies(res)
})

router.post('/dependency', (req, res) => {
  const dependencyController = new DependencyController()
  dependencyController.createDependency(req.body, res)
})

router.post('/dependency/item', (req, res) => {
  const dependencyController = new DependencyController()
  const { id: dependencyId } = req.query
  dependencyController.addItemsToDependendy(req.body.items, dependencyId, res)
})

export default router

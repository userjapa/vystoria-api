
import express from 'express'
import InspectorController from '../controllers/inspector'

const router = express.Router()

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

export default router


import InspectorController from '../controllers/inspector'
import Authentication from '../../../commons/authentication'

const inspector = (router) => {

  router.post('/token', (req, res) => {
    const inspectorController = new InspectorController()
    inspectorController.createAJWTToken(req.body, res)
  })

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
}

export default inspector
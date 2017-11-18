
import InspectionController from '../controllers/inspection'

const inspection = (router) => {
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
}

export default inspection
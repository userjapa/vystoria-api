
import DependencyController from '../controllers/dependency'

const dependency = (router) => {
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
}

export default dependency
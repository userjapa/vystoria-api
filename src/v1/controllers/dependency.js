
import DependencyModel from '../models/Dependencies'

class Dependency {

  async getDependencyById (dependencyId) {

    try {
      const findByIdResponse = await DependencyModel.findById(dependencyId)
      response.json(findByIdResponse)
    } catch (findByIdError) {
      response.status(500).send('Error 500')
    }
  }

  async getDependencies () {

    try {
      const findResponse = await DependencyModel.find()
      response.json(findResponse)
    } catch (findError) {
      response.status(500).send('Error 500')
    }
  }

  async createDependency (dependencyBody, response) {
    try {
      const createResponse = await DependencyModel.create(dependencyBody)
      response.json(createResponse)
    } catch (createResponseError) {
      response.status(500).send('Error 500')
    }
  }

  async addItemsToDependendy (itemsBody = {}, dependencyId = '', response) {

    try {
      const findOneResponse = await DependencyModel.findOne({ _id: dependencyId })
      console.log('findOneResponse', findOneResponse)
      
      const items = [
        ...findOneResponse.items,
        ...itemsBody
      ]
      findOneResponse.items = items

      const updateResponse = await DependencyModel.update({ _id: dependencyId }, findOneResponse)
      response.json(findOneResponse)
    } catch (findOneError) {
      response.status(500).send('Error 500')
    }
  }
}

export default Dependency
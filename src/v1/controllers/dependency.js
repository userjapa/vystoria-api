
import DependencyModel from '../models/Dependencies'

class Dependency {

  async getItemById (itemId, response) {
    
    try {
      const dependency = await DependencyModel.findOne({
        'items._id': { $in: [itemId] }
      }).lean()
      
      return response
        ? response.json(dependency)
        : Promise.resolve(dependency)
    } catch (error) {
      return response
        ? response.status(500).send('Error 500')
        : Promise.reject(new Error(error))
    }
  }

  async getDependencyById (dependencyId, response) {

    try {
      const findByIdResponse = await DependencyModel.findById(dependencyId)

      return response
        ? response.json(findByIdResponse)
        : Promise.resolve(findByIdResponse)
    } catch (findByIdError) {
      return response
        ? response.status(500).send('Error 500')
        : Promise.reject(new Error(findByIdError))
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

  async updateDependency (dependencyId, dependencyUpdated, response) {

    try {
      const updateResponse = await DependencyModel.update({ _id: dependencyId }, dependencyUpdated) 
      
      return response
        ? response.json(updateResponse)
        : Promise.resolve(updateResponse)
  } catch (updateError) {
    return response
      ? response.status(500).send('Error 500')
      : Promise.reject(new Error(updateError))
    }
  }

  async addItemsToDependendy (itemsBody = {}, dependencyId = '', response) {

    try {
      const findOneResponse = await DependencyModel.findOne({ _id: dependencyId })
      
      const items = [
        ...findOneResponse.items,
        ...itemsBody
      ]
      findOneResponse.items = items

      const updateResponse = await DependencyModel.update({ _id: dependencyId }, findOneResponse)
      response.json(findOneResponse)
    } catch (error) {
      response.status(500).send('Error 500')
    }
  }
}

export default Dependency
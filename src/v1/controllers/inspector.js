
import InspectorModel from '../models/Inspectors'

class Inspector {

  async createInspector (inspectorBody, response) {

    try {
      const createResponse = await InspectorModel.create(inspectorBody)
      response.json(createResponse)
    } catch (createInspectorError) {
      response.status(500).send('Error 500')
    }
  }

  async getInspectorById (InspectorId, response) {

    try {
      const findByIdResponse = await InspectorModel.findById(InspectorId)
      response.json(findByIdResponse) 
    } catch (findByIdError) {
      response.status(500).send('Error 500')
    }
  }

  async getInspectors (response) {
    try {
      const findResponse = await InspectorModel.find()
      response.json(findResponse) 
    } catch (find) {
      response.status(500).send('Error 500')
    }
  }
}

export default Inspector
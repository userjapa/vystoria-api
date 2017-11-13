
import InspectionModel from '../models/Inspections'

class Inspection {

  async createInspection (InspectionBody, response) {

    try {
      const createResponse = await InspectionModel.create(InspectionBody)
      response.json(createResponse)
    } catch (createInspectionError) {
      response.status(500).send('Error 500')
    }
  }

  async getInspectionById (InspectionId, response) {

    try {
      const findByIdResponse = await InspectionModel.findById(InspectionId)
      response.json(findByIdResponse)
    } catch (findByIdError) {
      response.status(500).send('Error 500')
    }
  }

  async getInspections (response) {

    try {
      const findResponse = await InspectionModel.find()
      response.json(findResponse)
    } catch (findError) {
      response.status(500).send('Error 500')
    }
  }
}

export default Inspection
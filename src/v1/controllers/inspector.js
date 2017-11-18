
import jwt from 'jwt-simple'

import jwtConfigs from '../../../configs/jwt'
import InspectorModel from '../models/Inspectors'

class Inspector {

  async createAJWTToken ({ email, password }, response) {
    
    try {
      const findOneInspectorResponse = await InspectorModel.findOne({ email, password })
      const hasMatch = (email === findOneInspectorResponse.email && password === findOneInspectorResponse.password)

      if (hasMatch) {
        const payload = { _id: findOneInspectorResponse._id }
        const token = jwt.encode(payload, jwtConfigs.jwtSecret)

        return response.json({ token })
      }

      return response.status(401)
    } catch (findOneInspectorError) {
      console.log('Find inspector error', findOneInspectorError)
      response.status(500).send('Error 500')
    }
    
  }

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
    } catch (findError) {
      response.status(500).send('Error 500')
    }
  }
}

export default Inspector
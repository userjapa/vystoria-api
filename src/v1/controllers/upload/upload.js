import {
  findIndex,
  propEq,
  mergeAll
} from 'ramda'

import DependencyController from '../../controllers/dependency'
import S3 from '../../../../commons/aws/s3'

class Upload {

  async uploadSingleImage ({ buffer, mimetype }, itemId, response) {
    const dependencyController = new DependencyController()
    
    const dependency = await dependencyController.getItemById(itemId)
    if (!dependency) return response.json({ error: 'ItemId not found' })

    const s3 = new S3('vystoria-inspections')
    const imageExtension = mimetype.split('/')[1]
    const Key = `${dependency._id}-${new Date().getTime()}.${imageExtension}`
    const Body = buffer
    const ContentType = mimetype

    const { Location } = await s3.upload({ Key, Body, ContentType })
    const itemIndex = findIndex(propEq('_id', itemId))(dependency.items) 
    const image = { key: Key, path: Location }

    const itemIsArray = (
      !dependency.items[itemIndex].images &&
      !Array.isArray(dependency.items[itemIndex].images)
    )

    if (itemIsArray) dependency.items[itemIndex].images = []
    dependency.items[itemIndex].images.push(image)

    await dependencyController.updateDependency(dependency._id, dependency)

    response
      ? response.json(dependency)
      : Promise.resolve(dependency)
  }
}

export default Upload
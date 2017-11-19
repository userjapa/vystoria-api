
import DependencyController from '../../controllers/dependency'
import S3 from '../../../../commons/aws/s3'

class Upload {

  async uploadSingleImage (file, dependencyId, response) {
    const dependencyController = new DependencyController()
    
    const dependency = await dependencyController.getDependencyById(dependencyId)

    if (!dependency) return response.json({ error: 'DependencyId not found' })
      
    const s3 = new S3('vystoria-inspections') 
    const Key = `${dependency._id}-${new Date().getTime()}.${file.mimetype.split('/')[1]}`
    const Body = file.buffer
    const ContentType = file.mimetype

    const s3Response = await s3.upload({ Key, Body, ContentType })

    console.log(s3Response)
    response.json(s3Response)
  }
}

export default Upload
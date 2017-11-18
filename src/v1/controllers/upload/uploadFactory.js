
import Upload from './upload'
import EnumHelper from '../../../../commons/EnumHelper'

class UploadFactory {

  static chooseUploadType ({ type }, file, response) {
    const uploadController = new Upload()

    switch (type) {
      case EnumHelper.upload.types.image:
        return uploadController.uploadSingleImage(file, response)
      case EnumHelper.upload.types.video:
        return
      default:
        return response.status(500).json({ error: 'Please pass an upload type to the UploadFactory' })
    }
  }
}

export default UploadFactory
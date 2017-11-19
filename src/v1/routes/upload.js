import multer from 'multer'

import UploadFactory from '../controllers/upload/uploadFactory'
import Authentication from '../../../commons/authentication'
import uploadConfig from '../../../configs/upload'

const uploadDriver = multer(uploadConfig)

const upload = (router) => {

  router.post('/upload', Authentication.authenticate(), uploadDriver.single('file'), (req, res) => {
    const { query, file } = req
    console.log(file)
    UploadFactory.chooseUploadType(query, file, res)
  })
}

export default upload
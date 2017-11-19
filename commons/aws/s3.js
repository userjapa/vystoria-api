
import AWS from 'aws-sdk'

class S3 {
  constructor (Bucket) {
    this.S3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket }
    })
  }

  upload ({ Key, Body, ContentType, ACL = 'public-read' }) {
    return new Promise((resolve, reject) =>
      this.S3.upload({ Key, Body, ContentType, ACL }, (uploadError, uploadResponse) =>
        uploadError
          ? reject(uploadError)
          : resolve(uploadResponse)
      )
    )
  }
}

export default S3
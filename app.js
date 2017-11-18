
import express from 'express'
import bodyParser from 'body-parser'

import Authentication from './commons/authentication'
import router from './src/v1/routes'

const app = express()

app.use(Authentication.init())
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true, uploadDir: '/tmp/uploads', limit: '10mb' }))

app.use(router)

export default app

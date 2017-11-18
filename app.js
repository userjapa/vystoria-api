
import express from 'express'
import bodyParser from 'body-parser'

import Authentication from './commons/authentication'
import router from './src/v1/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(Authentication.init())

app.use(router)

export default app

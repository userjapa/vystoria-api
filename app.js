
import express from 'express'
import bodyParser from 'body-parser'

import './configs/database'
import router from './src/v1/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, () => console.log('ok'))

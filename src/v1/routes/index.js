
import express from 'express'
import Inspector from '../models/Inspectors'

const router = express.Router()

router.use((req, res, next) => {
  console.log(new Date())
  next()
})

router.post('/createUser', (req, res) => {

  Inspector.create(req.body, (err, res) => {
    console.log(res)
  })
  res.json({ 'payload': 'ok' })
})

export default router

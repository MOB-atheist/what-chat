import express from 'express'
import User from '../db/models/users'
const router = express.Router()

router.use(function timeLog(req, res, next): void {
  console.log('Time: ', new Date().toUTCString())
  next()
})

router.get('/users', (req, res) => {
  User.findAll().then((response: any) => {
    res.status(200)
    res.json(response)
  })
})

export default router

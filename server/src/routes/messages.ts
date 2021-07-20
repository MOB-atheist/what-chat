import express from 'express'
import User from '../db/models/users'
import Messages from '../db/models/message'

const router = express.Router()

router.use(function timeLog(req, res, next): void {
  console.log('Time: ', new Date().toUTCString())
  next()
})

router.get('/messages', (req, res) => {
  Messages.findAll({
    include: [User]
  })
    .then((messages: any) => {
      res.status(200)
      res.json(messages)
    })
    .catch((err: Error) => {
      res.status(500)
      res.json(err)
    })
})

export default router

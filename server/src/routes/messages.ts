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
    include: [User],
    where: {
      ...req.query
    }
  })
    .then((data: any) => {
      res.status(200)
      res.json(data)
    })
    .catch((err: Error) => {
      res.status(500)
      res.json(err)
    })
})

router.post('/messages', (req, res) => {
  Messages.findOrCreate({
    defaults: {
      ...req.body
    },
    where: {
      ...req.body
    }
  })
    .then(([data]) => {
      res.status(200)
      res.json(data)
    })
    .catch((err: Error) => {
      res.status(500)
      res.json(err)
    })
})

router.patch('/messages/:id', (req, res) => {
  Messages.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((status: any) => {
      res.status(200)
      res.send(Boolean(...status))
    })
    .catch((err: Error) => {
      res.status(500)
      res.json(err)
    })
})

router.delete('/messages/:id', (req, res) => {
  Messages.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((status: any) => {
      res.status(200)
      console.log(status)
      res.send(Boolean(status))
    })
    .catch((err: Error) => {
      res.status(500)
      res.json(err)
    })
})

export default router

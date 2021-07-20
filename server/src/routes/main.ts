import express from 'express'
const router = express.Router()

router.use(function timeLog(req, res, next): void {
  console.log('Time: ', new Date().toUTCString())
  next()
})

router.get('/', (req, res) => {
  res.redirect('https://what-chat.coderahead.me/#/')
})

export default router

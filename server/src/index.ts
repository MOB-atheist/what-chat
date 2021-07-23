import express from 'express'
import { createServer } from 'http'
import cors from 'cors'

import main from './routes/main'
import messages from './routes/messages'
import users from './routes/users'
import socket from './socket/main'

const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({ extended: false }))

app.use(main)
app.use(messages)
app.use(users)

const server = createServer(app)

socket(server) // socket.io

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

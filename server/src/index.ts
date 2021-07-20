import express from 'express'
import cors from 'cors'

import main from './routes/main'
import messages from './routes/messages'
import users from './routes/users'

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({ extended: false }))

app.use(main)
app.use(messages)
app.use(users)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

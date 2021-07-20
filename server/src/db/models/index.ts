import { Sequelize } from 'sequelize'

declare let process: {
  env: {
    NODE_ENV: string
  }
}

const env = process.env.NODE_ENV || 'development'
const config = require('../../config.js')[env]

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config)

sequelize.sync({ force: true })

export { Sequelize, sequelize }

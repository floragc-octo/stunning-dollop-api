const { repositories} = require('../repository')

const HealthcheckController = require('./healthcheck/controller')
const UserController = require('./user/controller')


const healthcheckController = new HealthcheckController(repositories)
const userController = new UserController(repositories)

const controllers = {
    healthcheckController,
    userController,
}

module.exports = { controllers }
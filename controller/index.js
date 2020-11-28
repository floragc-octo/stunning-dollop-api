const HealthcheckController = require('./healthcheck/controller')

const healthcheckController = new HealthcheckController()

const controllers = {
    healthcheckController
}

module.exports = { controllers }
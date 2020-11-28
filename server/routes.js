const {healthcheckRoute} = require('../controller/healthcheck/routes')

const createRoute = (controllers) => [
    ...healthcheckRoute(controllers)
]

module.exports = { createRoute }
const {healthcheckRoute} = require('../controller/healthcheck/routes')
const {userRoute} = require('../controller/user/routes')

const createRoute = (controllers) => [
    ...healthcheckRoute(controllers),
    ...userRoute(controllers),
]

module.exports = { createRoute }
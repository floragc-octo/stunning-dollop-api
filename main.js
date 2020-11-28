const Hapi = require('@hapi/hapi');
const { createRoute } = require('./server/routes')
const { controllers } = require('./controller')
const routes = createRoute(controllers)

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    routes.forEach((route) => server.route(route))

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

init()
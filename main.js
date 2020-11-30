const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const { createRoute } = require('./server/routes')
const { controllers } = require('./controller')
const routes = createRoute(controllers)

const swaggerOptions = {
    info: {
        title: 'Open API stunning dollop',
        version: Pack.version,
    },
};


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    routes.forEach((route) => server.route(route))

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

init()

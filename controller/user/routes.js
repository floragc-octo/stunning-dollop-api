const Joi = require('joi');
const { USER_OUTPUT_SCHEMA, USER_LIST_OUTPUT_SCHEMA,  USER_INPUT_SCHEMA } = require('./schema');
const { DEFAULT_ERROR_ROUTES, ID_VALIDATOR } = require('../routes.utils');
const USER_UUID = '927a7942-aec9-47bd-8ec9-5bec3fb86ba8'


const userRoute = ({ userController }) => [
    {
        method: "GET",
        path: "/users/{id}",
        handler: (request, h) => userController.get(request, h),
        options: {
            description: 'get a user',
            notes: 'Returns a user item by the id passed in the path',
            tags: ['api', 'user'],
            validate: {...ID_VALIDATOR({ ressource: 'user', defaultUUID: USER_UUID})},
            plugins: {
                'hapi-swagger': {
                    responses: {
                        200: {
                            description: 'returns the user list',
                            schema: USER_OUTPUT_SCHEMA,
                        },
                        ...DEFAULT_ERROR_ROUTES
                    },
                },
            },
        },
    },
    {
        method: "DELETE",
        path: "/users/{id}",
        handler: (request, h) => userController.delete(request, h),
        options: {
            tags: ['api', 'user'],
            description: 'delete the user',
            validate: {...ID_VALIDATOR({ ressource: 'user', defaultUUID: USER_UUID})},
            plugins: {
                'hapi-swagger': {
                    responses: {
                        203: {
                            description: 'No Content',
                        },
                        ...DEFAULT_ERROR_ROUTES
                    },
                },
            },
        },
    },
    {
        method: "GET",
        path: "/users/",
        handler: (request, h) => userController.list(request, h),
        options: {
            description: 'list users',
            tags: ['api', 'user'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        200: {
                            description: 'returns the user list',
                            schema: USER_LIST_OUTPUT_SCHEMA,
                        },
                        ...DEFAULT_ERROR_ROUTES
                    },
                },
            },
        },
    },
    {
        method: "POST",
        path: "/users/",
        handler: (request, h) => userController.create(request, h),
        options: {
            description: 'create a user',
            tags: ['api', 'user'],
            validate: {
                payload: USER_INPUT_SCHEMA.options({ stripUnknown: true })
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        200: {
                            description: 'returns the created user',
                            schema: USER_OUTPUT_SCHEMA,
                        },
                        ...DEFAULT_ERROR_ROUTES
                    },
                },
            },
        }
    },
    {
        method: "PUT",
        path: "/users/{id}",
        handler: (request, h) => userController.update(request, h),
        options: {
            description: 'update a user',
            tags: ['api', 'user'],
            validate: {
                payload: USER_INPUT_SCHEMA.options({ stripUnknown: true })
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        200: {
                            description: 'returns the updated user',
                            schema: USER_OUTPUT_SCHEMA,
                        },
                        ...DEFAULT_ERROR_ROUTES
                    },
                },
            },
        },
    },
]

module.exports = { userRoute }

const userRoute = ({ userController }) => [
    {
        method: "GET",
        path: "/users/{id}",
        handler: (request, h) => userController.get(request, h)
    },
    {
        method: "DELETE",
        path: "/users/{id}",
        handler: (request, h) => userController.delete(request, h)
    },
    {
        method: "GET",
        path: "/users/",
        handler: (request, h) => userController.list(request, h)
    },
    {
        method: "POST",
        path: "/users/",
        handler: (request, h) => userController.create(request, h)
    },
    {
        method: "PUT",
        path: "/users/{id}",
        handler: (request, h) => userController.update(request, h)
    },
]

module.exports = { userRoute }
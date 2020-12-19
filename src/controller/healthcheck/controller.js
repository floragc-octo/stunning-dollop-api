module.exports = class HealthcheckController {
    constructor() { }

    async get(request, h) {
        return h.response(
            { status: "OK" }
        )
    }
}
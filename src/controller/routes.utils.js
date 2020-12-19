const Joi = require('joi')

const DEFAULT_ERROR_ROUTES = {
	400: {
		description: 'Bad Request',
	},
	403: {
		description: 'Forbidden',
	},
	404: {
		description: 'Not Found',
	},
	502: {
		description: 'Not Implemented Yet'
	},
}

const ID_VALIDATOR = ({ressource , defaultUUID } = {}) => ({
	params: Joi.object({
		id : Joi.string()
			.uuid()
			.description(`the id for the "${ressource}"`)
			.default(defaultUUID)
	})
})
module.exports = { DEFAULT_ERROR_ROUTES, ID_VALIDATOR }

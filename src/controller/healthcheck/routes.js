const healthcheckRoute = ({ healthcheckController }) => [
	{
		method: 'GET',
		path: '/healthcheck',
		handler: (request, h) => healthcheckController.get(request, h)
	}
]

module.exports = { healthcheckRoute }
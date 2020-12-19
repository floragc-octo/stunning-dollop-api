const  { JSONRepository: UserRepository } = require('./user/JSONRepository')
const config = process.env
const userRepository = new UserRepository(config)

const repositories = {
	userRepository,
}

module.exports = { repositories }

const  { JSONRepository: UserRepository } = require('./user/JSONRepository')

const userRepository = new UserRepository()

const repositories = {
    userRepository,
}

module.exports = { repositories }
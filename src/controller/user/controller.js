module.exports = class UserController {
	constructor({ userRepository }) {
		this.userRepository = userRepository
	}

	async get(request, h) {
		try {
			const { params: {id} } = request
			const user = await this.userRepository.get(id)
			if(!user){
				return h.response().code(404)
			}
			return h.response(user).code(200)
		} catch(error) {
			if(error.message === 'Not implemented yet') return h.response().code(501)
		}
	}

	async delete(request, h) {
		try {
			const { params: {id} } = request
			await this.userRepository.delete(id)
			return h.response().code(204)
		} catch(error) {
			if(error.message === 'Not implemented yet') return h.response().code(501)
			if(error.message === 'NOT FOUND') return h.response().code(404)
		}
	}

	async list(request, h) {
		try {
			const userList = await this.userRepository.list()
			return h.response(userList).code(200)
		} catch(error) {
			if(error.message === 'Not implemented yet') return h.response().code(501)
		}
	}

	async create(request, h) {
		try {
			const { payload: newUser } = request
			const createdUser = await this.userRepository.create(newUser)
			return h.response(createdUser).code(201)
		} catch(error) {
			if(error.message === 'Not implemented yet') return h.response().code(501)
		}
	}

	async update(request, h) {
		try {
			const { params: {id}, payload: userValues } = request
			const updatedUser = await this.userRepository.update(id, userValues)
			return h.response(updatedUser).code(200)
		} catch(error) {
			if(error.message === 'Not implemented yet') return h.response().code(501)
		}
	}
}

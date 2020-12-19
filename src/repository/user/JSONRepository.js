const fs = require('fs')
const path = require('path')
const { v4: generateUUID } = require('uuid')

const currentDate = () => new Date()

class JSONRepository {
	constructor(config) {
		const buffer = fs.readFileSync(
			path.resolve(__dirname, './data/user.json')
		)
		this.userList = JSON.parse(buffer.toString())
		this.shouldSave = config.MOCK !== 'true'
	}
	get(id) {
		return Promise.resolve(
			this.userList.find(({ id: userId }) => userId === id)
		)
	}
	list(params) {
		if(params)
			throw new Error('Not Implemented Yet')
		return Promise.resolve(
			this.userList
		)
	}
	create(newUser) {
		const id = generateUUID()
		const generatedUser = { ...newUser, id, createdAt: currentDate(), updatedAt: currentDate() }
		this.userList.push(generatedUser)
		this.save()
		return Promise.resolve(generatedUser)
	}
	delete(id) {
		const userListToSave = this.userList.reduce((newUserList, JsonUser) => {
			if (JsonUser.id !== id) newUserList.push(JsonUser)
			return newUserList
		}, [])
		if(userListToSave.length === this.userList.length) {
			return Promise.reject(new Error('NOT FOUND'))
		}
		this.userList = userListToSave
		this.save()
		return Promise.resolve(true)
	}
	update(id, user) {
		let userUpdated
		const userListToSave = this.userList.reduce((newUserList, JsonUser) => {
			if (JsonUser.id !== id) newUserList.push(JsonUser)
			else {
				userUpdated = { ...JsonUser, ...user, id, updatedAt: currentDate() }
				newUserList.push(userUpdated)
			}
			return newUserList
		}, [])
		this.userList = userListToSave
		this.save()
		return Promise.resolve(userUpdated)
	}
	save() {
		if(this.shouldSave) {
			fs.writeFileSync(path.resolve(__dirname, './data/user.json'), JSON.stringify(this.userList))
		}
	}
}

module.exports = { JSONRepository }

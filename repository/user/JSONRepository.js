const fs = require('fs')
const path = require('path')
const { v4: generateUUID } = require('uuid')

const currentDate = () => new Date()

class JSONRepository {
    constructor() {
        const buffer = fs.readFileSync(
            path.resolve(__dirname, "./data/user.json")
        )
        this.userList = JSON.parse(buffer.toString())
    }
    get(id) {
        return Promise.resolve(
            this.userList.find(({ id: userId }) => userId === id)
        )
    }
    list(params) {
        return Promise.resolve(
            this.userList
        )
    }
    create(newUser) {
        const id = generateUUID()
        const generatedUser = { ...newUser, id, createdAt: currentDate(), updatedAt: currentDate() }
        this.userList.push(generatedUser)
        fs.writeFileSync(path.resolve(__dirname, "./data/user.json"), JSON.stringify(this.userList))
        return Promise.resolve(generatedUser)
    }
    delete(id) {
        const userListToSave = this.userList.reduce((newUserList, JsonUser) => {
            if (JsonUser.id !== id) newUserList.push(JsonUser);
            return newUserList;
        }, []);
        if(userListToSave.length === this.userList.length) {
            return Promise.reject(new Error('NOT FOUND'))
        }
        this.userList = userListToSave
        fs.writeFileSync(path.resolve(__dirname, "./data/user.json"), JSON.stringify(this.userList))
        return Promise.resolve(true)
    }
    update(id, user) {
        let userUpdated
        const userListToSave = this.userList.reduce((newUserList, JsonUser) => {
            if (JsonUser.id !== id) newUserList.push(JsonUser);
            else {
                userUpdated = { ...JsonUser, ...user, id, updatedAt: currentDate() }
                newUserList.push(userUpdated)
            }
            return newUserList;
        }, []);
        this.userList = userListToSave
        fs.writeFileSync(path.resolve(__dirname, "./data/user.json"), JSON.stringify(this.userList))
        return Promise.resolve(userUpdated)
    }

}

module.exports = { JSONRepository }
const UserController = require('./controller')
const { random } = require('faker')
const defaultID = random.uuid()

const makeHTTPRequest = (id) => ({ params: { id } })
const defaultUser = { id: defaultID }

let repositories
let h
let userController

describe('user controller Unit test', () => {
	beforeEach(() => {
		h = {
			response: jest.fn().mockReturnThis(),
			code: jest.fn().mockReturnThis(),
		}
		repositories = {
			userRepository: {
				create: jest.fn(),
				delete: jest.fn(),
				get: jest.fn(),
				list: jest.fn(),
				update: jest.fn(),
			}
		}
		userController = new UserController(repositories)
	})
	describe('#GET', () => {
		describe(`when user exists on id ${defaultID}`, () => {
			beforeEach(() => {
				repositories.userRepository.get.mockResolvedValue({...defaultUser})
				userController.get(makeHTTPRequest(defaultID), h)
			})
			it('calls userRepository.get once', () => {
				expect(repositories.userRepository.get).toHaveBeenCalledTimes(1)
			})
			it(`calls userRepository.get with ${defaultID} as param`, () => {
				expect(repositories.userRepository.get).toHaveBeenCalledWith(defaultID)
			})
			it('calls h.code once with "200" as param', () => {
				expect(h.code).toHaveBeenCalledTimes(1)
				expect(h.code).toHaveBeenCalledWith(200)
			})
			it('calls h.response once with the returns user as param', () => {
				expect(h.response).toHaveBeenCalledTimes(1)
				expect(h.response).toHaveBeenCalledWith({ ...defaultUser })
			})
		})
	})
})

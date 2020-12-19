const Joi = require('joi');

const USER_OUTPUT_SCHEMA = Joi.object({
  id: Joi.string().uuid().example('927a7942-aec9-47bd-8ec9-5bec3fb86ba8'),
  name: Joi.string().min(3).max(100).example('Simon B'),
  nickname: Joi.string().min(3).max(100).example('pet name'),
  mail: Joi.string().email().example('simon@example.org'),
  created_at: Joi.date().iso(),
  updated_at: Joi.date().iso(),
}).label('user\'s output Model');

const USER_LIST_OUTPUT_SCHEMA = Joi.array().items(USER_OUTPUT_SCHEMA).label('user\'s list output Model');

const USER_INPUT_SCHEMA = Joi.object({
  name: Joi.string().min(3).max(100),
  nickname: Joi.string().min(3).max(100),
  mail: Joi.string().email()
  }).label('user\'s input Model')

module.exports = { USER_OUTPUT_SCHEMA, USER_LIST_OUTPUT_SCHEMA, USER_INPUT_SCHEMA }

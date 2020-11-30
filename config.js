const extension = process.env.NODE_ENV || ''
const dotenvPath = extension ? `.env.${extension}` : '.env'

require('dotenv').config({ path: dotenvPath })

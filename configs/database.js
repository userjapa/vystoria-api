import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const { DATABASE_NAME } = process.env

/**
 * Init connection
 */
mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`, { useMongoClient: true })

/**
 * Logs
 */
mongoose.connection.on('connected', () => console.log(`[DATABASE] Connected ${DATABASE_NAME}`))
mongoose.connection.on('error', (databaseError) => console.log('[DATABASE] Error', databaseError))
mongoose.connection.on('disconnected', () => console.log('[DATABASE] Disconnected'))

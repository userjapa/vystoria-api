import cluster from 'cluster'
import { cpus } from 'os'
import dotenv from 'dotenv'

import './configs/database'
import app from './app'

dotenv
  .config({ silent: true, path: `.env.${process.env.NODE_ENV}` })

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  /**
   * Fork workers
   */
  cpus().map((cpu) => 
    cluster.fork())

  cluster.on('exit', (worker, code, signal) => 
    console.log(`worker ${worker.process.pid} died`))
} else {
  /**
   * Workers can share any TCP connection
   * In this case it is an HTTP server
   */
  app.listen(4000, () => console.log('Server initialized.'))

  console.log(`Worker ${process.pid} started`)
}
import { updateCache } from './config/lastFm'
import build from './server'

// Initialize Last.fm cache
updateCache().catch(console.error)

const server = build({
  logger: {
    level: 'info'
  }
})
server.listen({
  host: '0.0.0.0',
  port: 80
}, (err, address) => {
  if (err !== null) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Listening on ${address}`)
})

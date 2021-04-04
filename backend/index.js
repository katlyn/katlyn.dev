const http = require('http')
const https = require('https')

let cached = {
  artist: 'server starting',
  track: 'boop beep',
  current: true
}
let cachedDate = null

const updateCache = () => {
  cachedDate = Date.now()
  return new Promise((resolve, reject) => {
    https.request({
      hostname: 'ws.audioscrobbler.com',
      path: `/2.0/?method=user.getrecenttracks&user=${process.env.FM_USER}&api_key=${process.env.FM_API_KEY}&format=json&limit=1`,
      method: 'GET'
    }, res => {
      if (res.statusCode !== 200) {
        reject(res.statusCode)
        return
      }

      let raw = ''

      res.on('data', chunk => raw += chunk)
      res.on('end', () => {
        const listening = JSON.parse(raw)
        cached = {
          artist: listening.recenttracks.track[0].artist['#text'],
          track: listening.recenttracks.track[0].name,
          current: listening.recenttracks.track[0]?.['@attr']?.nowplaying === 'true'
        }
        resolve()
      })
    }).end()
  })
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET') {   
    if (cachedDate < Date.now() - 60 * 1000) {
      try {
        await updateCache()
      } catch (err) {
        console.error('Could not update song cache. Last.fm responded with', err)
      }
    }
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(cached))
  } else {
    res.statusCode = 400
    res.setHeader('content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify({ error: 'not found' }))
  }
})

server.listen(80)

process.on('SIGTERM', server.close)

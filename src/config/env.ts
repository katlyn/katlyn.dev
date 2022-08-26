import { secret, strictVerify } from 'env-verifier'

const config = {
  lastfm: {
    username: 'LASTFM_USERNAME',
    apiKey: secret('LASTFM_API_KEY')
  }
}

const env = strictVerify<typeof config>(config)

export default env

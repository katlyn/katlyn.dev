import { secret, strictVerify } from "env-verifier";

const config = {
  lastfm: {
    username: "LASTFM_USERNAME",
    apiKey: secret("LASTFM_API_KEY"),
  },
  contact: {
    phone: "CONTACT_PHONE",
    email: "CONTACT_EMAIL",
    website: "CONTACT_WEBSITE",
    github: "CONTACT_GITHUB",
  },
};

const env = strictVerify<typeof config>(config);

export default env;

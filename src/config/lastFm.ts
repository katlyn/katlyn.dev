import env from "./env.ts";

let cached = {
  artist: "server starting",
  track: "boop beep",
  current: true,
  url: null,
};

const apiUrl = new URL("https://ws.audioscrobbler.com/2.0/");
apiUrl.searchParams.set("method", "user.getrecenttracks");
apiUrl.searchParams.set("user", env.lastfm.username);
apiUrl.searchParams.set("api_key", env.lastfm.apiKey.reveal());
apiUrl.searchParams.set("format", "json");
apiUrl.searchParams.set("limit", "1");

export const updateCache = async (): Promise<void> => {
  const request = await fetch(apiUrl);
  if (request.ok) {
    const listening = await request.json();
    cached = {
      artist: listening.recenttracks.track[0].artist["#text"],
      track: listening.recenttracks.track[0].name,
      current:
        listening.recenttracks.track[0]?.["@attr"]?.nowplaying === "true",
      url: listening.recenttracks.track[0].url,
    };
  } else {
    throw new Error(await request.text());
  }
};

export const getTrack = (): typeof cached => {
  return cached;
};

// Automatically update the cache every 60 seconds
setInterval(updateCache, 60e3);

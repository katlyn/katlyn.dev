import { updateCache } from "./config/lastFm.ts";
import build from "./server.ts";

// Initialize Last.fm cache
updateCache().catch(console.error);

const server = build();
server.listen({
  port: 8080,
});

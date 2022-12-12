import serveStatic from "@fastify/static"
import ejs from "ejs"
import fastify from "fastify"
import { join } from "path"

import { getTrack } from "./config/lastFm"

export default function build (opts = {}): ReturnType<typeof fastify> {
  const server = fastify(opts)

  // TODO: Register routes
  server.get("/", async (request, reply) => {
    const colors = [
      "peach",
      "strawberry",
      "cantaloupe",
      "banana",
      "watermelon",
      "mint",
      "water",
      "ube"
      // 'tapioca'
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]
    void reply.type("text/html")
    return await ejs.renderFile(join(__dirname, "..", "views", "index.ejs"), {
      ...await getTrack(),
      color
    })
  })

  server.get("/now-playing", async (request, reply) => {
    return await getTrack()
  })

  void server.register(serveStatic, {
    root: join(__dirname, "..", "public")
  })

  return server
}

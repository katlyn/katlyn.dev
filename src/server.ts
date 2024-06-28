import serveStatic from "@fastify/static"
import ejs from "ejs"
import fastify from "fastify"
import { join } from "path"

import { getEntities } from "./config/cuteEntities"
import { getTrack } from "./config/lastFm"

function randomColor() {
  const colors = [
    "peach",
    "strawberry",
    "cantaloupe",
    "banana",
    "watermelon",
    // "mint",
    "water",
    "ube"
    // 'tapioca'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function build(opts = {}): ReturnType<typeof fastify> {
  const server = fastify(opts)

  server.get("/", async (request, reply) => {
    const color = randomColor()
    void reply.type("text/html")
    return await ejs.renderFile(join(__dirname, "..", "views", "index.ejs"), {
      track: await getTrack(),
      ...getEntities(),
      color
    })
  })

  server.get("/now-playing", async (request, reply) => await getTrack())

  // server.get("/resume", async (request, reply) => {
  //   const color = randomColor()
  //   void reply.type("text/html")
  //   return await ejs.renderFile(join(__dirname, "..", "views", "resume", "index.ejs"), {
  //     ...resume,
  //     color
  //   })
  // })
  //
  // server.get("/letter", async (request, reply) => {
  //   const color = randomColor()
  //   void reply.type("text/html")
  //   return await ejs.renderFile(join(__dirname, "..", "views", "letter.ejs"), {
  //     color
  //   })
  // })

  void server.register(serveStatic, {
    root: join(__dirname, "..", "public")
  })

  return server
}

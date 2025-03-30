import { join } from "node:path";

import fastifyCors from "npm:@fastify/cors";
import serveStatic from "npm:@fastify/static";
import ejs from "npm:ejs";
import fastify from "npm:fastify";

import { getEntities } from "./config/cuteEntities.ts";
import { getTrack } from "./config/lastFm.ts";

function randomColor() {
  const colors = [
    "peach",
    "strawberry",
    "cantaloupe",
    "banana",
    "watermelon",
    // "mint",
    "water",
    "ube",
    // 'tapioca'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function build(opts = {}) {
  const server = fastify(opts);

  server.register(fastifyCors, {
    methods: "GET",
  });

  server.get("/", async (_request, reply) => {
    const color = randomColor();
    void reply.type("text/html");
    return await ejs.renderFile(
      join(import.meta.dirname!, "..", "views", "index.ejs"),
      {
        track: getTrack(),
        ...getEntities(),
        color,
      },
    );
  });

  server.get("/now-playing", () => getTrack());

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
    root: join(import.meta.dirname!, "..", "public"),
  });

  return server;
}

import { join } from "node:path";

import fastifyCors from "npm:@fastify/cors";
import serveStatic from "npm:@fastify/static";
import { render } from "npm:preact-render-to-string";
import fastify from "npm:fastify";

import { getTrack } from "./config/lastFm.ts";
import Index from "../views/Index.tsx";

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

  server.get("/", (_request, reply) => {
    const color = randomColor();
    void reply.type("text/html");
    return "<!DOCTYPE html>" + render(Index({ color }));
  });

  server.get("/now-playing", () => getTrack());

  void server.register(serveStatic, {
    root: join(import.meta.dirname!, "..", "public"),
  });

  return server;
}

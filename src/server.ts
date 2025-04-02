import logger from "oak-logger";
import { render } from "npm:preact-render-to-string";
import Index from "../views/Index.tsx";
import { resolve } from "jsr:@std/path";

import { Application, Router, send } from "jsr:@oak/oak";
import { VNode } from "preact";
import NotFound from "../views/NotFound.tsx";

const PUBLIC_ROOT_PATH = resolve(import.meta.dirname ?? "", "../public");

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

function renderHtml(vnodes: VNode) {
  return "<!DOCTYPE html>" + render(vnodes);
}

export default function build() {
  const router = new Router();

  router.get("/", (ctx) => {
    const color = randomColor();
    ctx.response.headers.set("content-type", "text/html");
    ctx.response.body = renderHtml(Index({ color }));
  });

  const app = new Application();
  app.use(logger.logger);
  app.use(logger.responseTime);
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use(async (ctx, next) => {
    try {
      await send(ctx, ctx.request.url.pathname, {
        root: PUBLIC_ROOT_PATH,
        index: "index.html",
      });
    } catch (_) {
      await next();
    }
  });

  app.use((ctx, _next) => {
    ctx.response.status = 404;
    ctx.response.headers.set("content-type", "text/html");
    ctx.response.body = renderHtml(
      NotFound({ path: ctx.request.url.pathname }),
    );
  });

  return app;
}

import { Application, Router, send } from "@oak/oak";
import { resolve } from "@std/path";
import { oakCors } from "@tajpouria/cors";
import logger from "oak-logger";

import Index from "./views/Index.tsx";
import NotFound from "./views/NotFound.tsx";
import { templateRenderer } from "./templateRenderer.tsx";

const PUBLIC_ROOT_PATH = resolve(import.meta.dirname ?? "", "../public");

export default function build() {
  const router = new Router();

  router.get("/", (ctx) => {
    ctx.response.headers.set("content-type", "text/html");
    ctx.response.body = templateRenderer(Index());
  });

  const app = new Application();
  app.use(logger.logger);
  app.use(logger.responseTime);
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use(oakCors(), async (ctx, next) => {
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

    const renderedThing = NotFound({ path: ctx.request.url.pathname });
    ctx.response.body = templateRenderer(
      renderedThing,
    );
  });

  return app;
}

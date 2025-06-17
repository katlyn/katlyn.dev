import { VNode } from "preact";
import { renderToStringAsync as render } from "preact-render-to-string";
import Head from "./components/Head.tsx";
import { resolve } from "@std/path";

const template = await Deno.readTextFile(
  resolve(import.meta.dirname!, "template.html"),
);

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

export async function templateRenderer(page: VNode) {
  const body = await render(page);
  const head = await render(Head.rewind());
  return template.replace("<!-- TEMPLATE-SLOT-HEAD -->", head)
    .replace("<!-- TEMPLATE-SLOT-BODY -->", body)
    .replace("/* TEMPLATE-SLOT-ACCENT-COLOR */", `--${randomColor()}`);
}

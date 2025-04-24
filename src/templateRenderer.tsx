import { VNode } from "preact";
import { render } from "preact-render-to-string";
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

export function templateRenderer(page: VNode) {
  const body = render(page);
  const head = render(Head.rewind());
  return template.replace("<!-- TEMPLATE-SLOT-HEAD -->", head)
    .replace("<!-- TEMPLATE-SLOT-BODY -->", body)
    .replace("<!-- TEMPLATE-SLOT-ACCENT-COLOR -->", randomColor());
}

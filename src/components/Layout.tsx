import Head from "./Head.tsx";
import { VNode } from "preact";

export default function Layout(
  {
    accentColor,
    children,
  }: {
    accentColor: string;
    children: VNode | VNode[];
  },
) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* @ts-expect-error */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f9b28c" />
        <meta name="theme-color" content="#f9b28c" />

        <link rel="stylesheet" href="/style.css" />

        {Head.rewind()}
      </head>
      <body style={`--accent: var(--${accentColor})`}>
        {children}
      </body>
    </html>
  );
}

import { getEntities } from "../src/config/cuteEntities.ts";
import { getTrack } from "../src/config/lastFm.ts";

export default function Index({ color }: { color: string }) {
  const { descriptor, entities } = getEntities();
  const track = getTrack();
  return (
    <>
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
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#f9b28c" />

          <meta property="og:description" content="hi. i do code and stuff." />
          <meta property="og:title" content="katlyn" />

          <meta name="author" content="katlyn" />
          <meta name="description" content="hi. i do code and stuff." />
          <meta name="theme-color" content="#b0d2b0" />

          <link rel="stylesheet" href="/style.css" />

          <title>katlyn</title>
        </head>
        <body style={`--accent: var(--${color})`}>
          <header>
            <img src="/polyfox.svg" alt="A low poly fox" />
            <h1>katlyn</h1>
            <h2>hi. i do code and stuff.</h2>
          </header>
          <nav>
            <ul>
              <li>
                <a href="https://blog.katlyn.dev/">blog</a>
              </li>
              <li>
                <a href="https://github.com/katlyn/">github</a>
              </li>
              <li>
                <a rel="me" href="https://mastodon.is-hardly.online/@katlyn">
                  fediverse
                </a>
              </li>
              <li>
                <a href="https://matrix.to/#/@katlyn:is-hardly.online">
                  matrix
                </a>
              </li>
              {/* <!-- <li><a href="/resume.pdf">resume</a></li> */}
            </ul>
          </nav>
          <section id="entities">
            <div class="icon sparkle"></div>
            <h3 class="smol">{descriptor} entities</h3>
            <ul>
              {entities.map((entity) => (
                <li>
                  <a href={entity.url} target="_blank">{entity.name}</a>
                </li>
              ))}
            </ul>
          </section>
          <section id="now-playing">
            <div class="icon headphones"></div>
            <h2 class="smol">
              {track.current ? "now listening to" : "last listened to"}
            </h2>
            <div>
              <a href={track.url ?? ""} target="_blank">{track.track}</a>
            </div>
            <div class="artist">by {track.artist}</div>
          </section>
        </body>
      </html>
    </>
  );
}

import { getEntities } from "../config/cuteEntities.ts";
import { getTrack } from "../config/lastFm.ts";
import Head from "../components/Head.tsx";

export default function Index() {
  const { descriptor, entities } = getEntities();
  const track = getTrack();
  return (
    <>
      <Head>
        <title>katlyn</title>

        <meta property="og:description" content="hi. i do code and stuff." />
        <meta property="og:title" content="katlyn" />

        <meta name="author" content="katlyn" />
        <meta name="description" content="hi. i do code and stuff." />
      </Head>

      <header>
        <img src="/polyfox.svg" fetchpriority="high" alt="A low poly fox" />
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
    </>
  );
}

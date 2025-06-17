type HttpSchemes = "http" | "https";

interface Entity {
  name: string;
  url: `${HttpSchemes}://${string}`;
}

const entities: Entity[] = [
  {
    name: "Cadence",
    url: "https://cadence.moe",
  },
  {
    name: "Cass",
    url: "https://dingenskirchen.org/",
  },
  {
    name: "Emma",
    url: "https://github.com/ghostlydilemma",
  },
  {
    name: "Hannah",
    url: "https://hanna.lol/"
  },
  {
    name: "Odette",
    url: "http://puppygirl.systems/",
  },
  {
    name: "Shoritsu",
    url: "https://shoritsu.xyz/",
  },
];

const descriptors: string[] = [
  "admirable",
  "curious",
  "cute",
  "friendy",
  "interesting",
  "neat",
  "notable",
  "peculiar",
  "pleasant",
];

export function getEntities() {
  const copy = [...entities];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return {
    descriptor: descriptors[Math.floor(Math.random() * descriptors.length)],
    entities: copy,
  };
}

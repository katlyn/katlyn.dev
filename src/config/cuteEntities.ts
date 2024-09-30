type HttpSchemes = "http" | "https"

interface Entity {
  name: string
  url: `${HttpSchemes}://${string}`
}

const entities: Entity[] = [
  {
    name: "Shoritsu",
    url: "https://shoritsu.xyz/"
  },
  {
    name: "Vee",
    url: "https://vendicated.dev/"
  },
  {
    name: "Cadence",
    url: "https://cadence.moe"
  },
  {
    name: "Emma",
    url: "https://github.com/ghostlydilemma"
  },
  {
    name: "Cass",
    url: "https://dingenskirchen.org/"
  },
  {
    name: "Odette",
    url: "http://puppygirl.systems/"
  }
]

const descriptors: string[] = [
  "admirable",
  "curious",
  "cute",
  "interesting",
  "neat",
  "notable",
  "peculiar",
  "pleasant"
]

export function getEntities() {
  const copy = [...entities]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return {
    descriptor: descriptors[Math.floor(Math.random() * descriptors.length)],
    entities: copy
  }
}

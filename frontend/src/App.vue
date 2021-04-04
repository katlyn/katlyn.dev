<template>
  <section id="now-playing">
    <MusicBars/>
    <div class="smol">{{ status }}</div>
    <div>{{ track.toLowerCase() }}</div>
    <div>by {{ artist.toLowerCase() }}</div>
  </section>
</template>

<script>
import MusicBars from './components/MusicBars.vue'

export default {
  name: 'App',
  components: {
    MusicBars
  },
  data: function () {
    return {
      artist: 'loading',
      track: 'server noises',
      current: true
    }
  },
  computed: {
    status: function () {
      return this.current ? 'now listening to' : 'last listened to'
    }
  },
  created: async function () {
    const req = await fetch('/now-playing')
    if (req.ok) {
      const data = await req.json()
      this.artist = data.artist
      this.track = data.track
      this.current = data.current
    }
  }
}
</script>

<style lang="scss">
#now-playing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &>div {
    margin-top: 0.25em;
  }

  .smol {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 700px) {
  #now-playing {
    align-items: center;
  }
}
</style>

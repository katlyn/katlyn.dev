<template>
  <div class="bars">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'MusicBars'
}
</script>

<style lang="scss">
.bars {
  display: flex;
  align-items: flex-end;
  height: 20px;

  >div {
    width: 4px;
    height: 8px;
    margin-right: 3px;
    background-color: var(--accent);
    // animation: 1s rise-fall ease-in-out alternate infinite;

    &:first-of-type {
      height: 13px;
      animation-delay: 0.2s;
    }

    &:last-of-type {
      height: 20px;
      margin-right: 0;
      animation-delay: 0.5s;
    }
  }
}

@keyframes rise-fall {
  to {
    height: 3px;
  }
}
</style>

<template>
  <feeds />
</template>

<script>
import { feeds } from './pages/feeds'

export default {
  name: 'App',
  components: {
    feeds
  }
}
</script>

<style lang="scss">
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

body, html {
  height: 100%;
  margin: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}

p {
  margin: 0;
}

svg {
  display: block;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

*, *::after, *::before {
  box-sizing: border-box;
}

.wrapper {
  position: relative;
  overflow: hidden;
  min-height: 100%;
}

.x-container {
  width: 1200px;
  margin: 0 auto;
}
.x-container--feed {
  width: 979px;
  margin: 0 auto;
}

</style>

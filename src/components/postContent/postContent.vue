<template>
<div class="user__post-container">
  <div class="post-title">{{ title }}</div>
  <div class="post-desc">{{ description }}</div>
  <metrics :stars="stars" :forks="forks" />
  </div>
</template>

<script>
import { metrics } from '../metrics'
export default {
  name: 'postContent',
  components: {
    metrics
  },
  props: ['title', 'description', 'stars', 'forks']
}
</script>

<style lang="scss" scoped src='./postContent.scss'></style>

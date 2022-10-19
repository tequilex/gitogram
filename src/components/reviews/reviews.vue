<template>
  <div class="reviews">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 6" :key="n">
          <comment text="Enable performance measuring in production, at the user's request" username="John Doe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
export default {
  name: 'reviews',
  components: {
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./reviews.scss"></style>

<template>
  <div class="metrics__wrap">
        <button class="metric__item">
            <icon name="star" />
            <div class="metric__item-title">Star</div>
        </button>
        <button class="metric__item">{{ stars }}</button>
        <button class="metric__item">
            <icon name="fork" />
            <div class="metric__item-title">Fork</div>
        </button>
        <button class="metric__item">{{ forks }}</button>
      </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'metrics',
  components: {
    icon
  },
  props: {
    stars: Number,
    forks: Number
  }
}
</script>

<style lang="scss" scoped src="./metrics.scss"></style>

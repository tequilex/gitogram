<template>
  <div class="c-inner-header">
    <h2 class="title">{{ title }}</h2>
    <div class="counter">{{ qty }}</div>
  </div>
</template>

<script>
export default {
  name: 'innerHeader',
  props: {
    title: {
      type: String,
      default: 'Items'
    },
    qty: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped src='./innerHeader.scss'></style>

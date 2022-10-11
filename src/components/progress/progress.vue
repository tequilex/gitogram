<template>
  <div class="c-progress" :class="{ active }">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    }, 0)

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>

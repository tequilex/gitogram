<template>
  <div class="c-progress" :class="{active: startProgress}">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'Xprogress',
  data () {
    return {
      startProgress: false
    }
  },
  props: {
    active: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.startProgress = this.active
    }, 0)

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish)
  },
  watch: {
    active (curVal, prevVal) {
      console.log(curVal, '|', prevVal)
      this.startProgress = !this.startProgress
    }
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>

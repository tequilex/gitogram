<template>
  <button
    :class="[
    'c-button', `theme-${theme}`
    ]"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src='./button.scss'></style>

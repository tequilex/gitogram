<template>
  <button :class="['button', { active: isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? 'Hide' : 'View' }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #292929;
  margin-right: 5px;
}

.icon {
  width: 10px;
  height: 5.5px;
  transform: rotate(0deg);
  color: black;
}
.button {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &.active {
    .icon {
      transform: rotate(180deg);
    }
  }
}
</style>

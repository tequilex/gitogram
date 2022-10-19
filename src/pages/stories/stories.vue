<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push('/')">
          <logo />
        </button>
        <button class="close-btn" @click="$router.push('/')">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import { storiesSlider } from '../../components/storiesSlider'
import { logo } from '../../components/logo'
import { icon } from '../../icons'
export default {
  components: {
    storiesSlider,
    logo,
    icon
  }
}
</script>

<style lang="scss" scoped src='./stories.scss'></style>

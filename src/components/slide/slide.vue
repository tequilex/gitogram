<template>
<div class="slide">
  <div class="slide-header">
    <xProgress />
    <div class="slide-user">
      <user
      avatar="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
      username="joshua_l"
      />
    </div>
  </div>
  <div class="slide-content">
    <div class="slide-content-cover">
      <img class="slide-content-img" src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg" alt="img slide">
    </div>
    <div class="slide-content-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fuga sunt! Optio architecto quidem facere consequatur. Beatae odit ut libero sint a assumenda! Asperiores inventore fuga voluptas, esse vitae reiciendis!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam nesciunt dolor, libero necessitatibus vero nisi repellendus. Accusamus itaque expedita perspiciatis id eveniet! At architecto amet eius cum rerum eligendi.
    </div>
  </div>
  <div class="slide-footer">
    <x-button v-bind="args">Following</x-button>
  </div>
</div>

</template>

<script>
import { xProgress } from '../../components/progress'
import { user } from '../../components/user'
import { xButton } from '../../components/button'

export default {
  name: 'slide',
  components: {
    xProgress,
    user,
    xButton
  }
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>

<template>
  <div class="navigation">
    <div class="home-img">
      <icon name="home" />
    </div>
    <div class="profile-img">
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
        class="img-avatar"
        alt="user photo"
      />
    </div>
    <div class="exit-img">
      <icon name="exit" />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'navigation',
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped src='./navigation.scss'></style>

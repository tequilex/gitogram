<template>
  <div class="navigation">
    <button class="home-img">
      <icon name="home" />
    </button>
    <button class="profile-img">
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
        class="img-avatar"
        alt="user photo"
      />
    </button>
    <button class="exit-img" @click="logout">
      <icon name="exit" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

import { mapActions } from 'vuex'

export default {
  name: 'navigation',
  components: {
    icon
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style lang="scss" scoped src='./navigation.scss'></style>

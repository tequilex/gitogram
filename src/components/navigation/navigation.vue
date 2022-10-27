<template>
  <div class="navigation">
    <button class="home-img">
      <icon name="home" />
    </button>
    <button class="profile-img">
      <img
        :src="src"
        class="img-avatar"
        :alt="`${username} avatar`"
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
  props: {
    src: {
      type: String
    },
    username: {
      type: String
    }
  },
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

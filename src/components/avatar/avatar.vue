<template>
  <div class="profile-img">
    <img
      :src="avatar"
      :alt="`${username} profile picture`"
      class="img-avatar"
        />
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    avatar: String,
    username: String
  }
}
</script>

<style lang="scss" scoped src='./avatar.scss'></style>

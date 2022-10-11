<template>
  <div class="post-author">
      <div class="post-author-avatar">
        <img
          :src="avatar"
          alt="avatar"
          class="img-avatar"
        />
      </div>
      <div class="username">{{ username }}</div>
    </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src='./user.scss'></style>

<template>
  <div :class="['post-author', sizeClass]">
      <div class="post-author-avatar">
        <img
          :src="avatar"
          alt="avatar"
          class="img-avatar"
        />
      </div>
      <div class="data">
        <div class="username">{{ username }}</div>
        <div class="type" v-if="type.length">{{ type.toLowerCase() }}</div>
      </div>
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
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String
    }
  },
  data () {
    return {
      sizeClass: `size-${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped src='./user.scss'></style>

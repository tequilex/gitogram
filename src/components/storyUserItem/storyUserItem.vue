<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" class="img" alt="username avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  border-radius: 50px;
  border: 2px solid #A6328D;
}

.avatar {
  width: 80px;
  margin-bottom: 16px;
}

.username {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #000000;
}
</style>

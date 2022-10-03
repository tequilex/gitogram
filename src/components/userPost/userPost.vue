<template>
  <div class="x-container--feed">
    <div class="post-author">
      <div class="post-author-avatar">
        <img
          src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
          alt="avatar"
          class="img-avatar"
        />
      </div>
      <div class="username">joshua_l</div>
    </div>
    <div class="user__post-container">
      <slot name="postContent" />
    </div>
    <div class="reviews">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 6" :key="n">
          <comment text="Enable performance measuring in production, at the user's request" username="John Doe" />
        </li>
      </ul>
    </div>
  </div>
  <div class="date">15 may</div>
  </div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'

export default {
  components: {
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>
<style lang="scss" scoped>
.post-author {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.img-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50px;
  margin-right: 14px;
}
.username {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #262626;
}
.user__post-container {
  background: #FFFFFF;
  padding: 24px 20px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  margin-bottom: 18px;
}
.date {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
}
.comments-list {
    margin-bottom: 10px;
}
</style>

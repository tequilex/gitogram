<template>
  <div class="c-user">
    <div class="avatar">
      <avatar
      :avatar="userAvatar"
      :username="login"
      />
    </div>
    <div class="user-info">
      <div class="header">
        <div class="username">{{ login }}</div>
          <ul class="stats">
            <li class="stats-item">
              <router-link :to="{name: 'user'}" class="watch">
              <span class="stats-count">{{ repos_qty }}</span>
              <span class="stats-title">reposts</span>
              </router-link>
            </li>
            <li class="stats-item">
              <router-link :to="{name: 'myFollowing'}" class="watch">
              <span class="stats-count">{{ stars_qty }}</span>
              <span class="stats-title">watchers</span>
              </router-link>
            </li>
          </ul>
      </div>
      <div class="name">
      <p>
        {{ username }}
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
export default {
  name: 'myProfile',
  components: {
    avatar
  },
  props: {
    userAvatar: String,
    login: String,
    username: String,
    repos_qty: Number,
    stars_qty: Number
  }
}
</script>

<style lang="scss" scoped src='./myProfile.scss'></style>

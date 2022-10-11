<template>
<div class="repository-list">
  <div class="repository-list__container" v-for="item in items" :key="item.id">
    <user
    v-bind="getFeedData(item)"
    />
      <post-content
      v-bind="getFeedData (item)"
      />
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
</div>
<!-- <pre>{{ items }}</pre> -->
</template>

<script>
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import { user } from '../../components/user'
import { postContent } from '../../components/postContent'

import * as api from './../../api'

export default {
  components: {
    toggler,
    comment,
    user,
    postContent
  },
  data () {
    return {
      shown: false,
      items: {}
    }
  },
  methods: {
    getFeedData (item) {
      return {
        username: item.owner.login,
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks,
        avatar: item.owner.avatar_url
      }
    },
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrandings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" scoped src="./repoList.scss"></style>

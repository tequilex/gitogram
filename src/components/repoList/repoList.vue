<template>
<div class="repository-list">
  <div class="repository-list__container" v-for="item in items" :key="item.id">
    <user
    v-bind="getFeedData(item)"
    />
      <post-content
      v-bind="getFeedData (item)"
      />
      <reviews />
  <div class="date">15 may</div>
  </div>
</div>
<!-- <pre>{{ items }}</pre> -->
</template>

<script>
import { user } from '../../components/user'
import { reviews } from '../../components/reviews'
import { postContent } from '../../components/postContent'

import * as api from './../../api'

export default {
  components: {
    reviews,
    user,
    postContent
  },
  data () {
    return {
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
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" scoped src="./repoList.scss"></style>

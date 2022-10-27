<template>
<div class="repository-list">
  <div class="repository-list__container" v-for="item in starred" :key="item.id">
    <user
    v-bind="getFeedData(item)"
    />
      <post-content
      v-bind="getFeedData (item)"
      />
      <reviews
      :issues="item.issues?.data"
      :loading="item.issues?.loading"
      :date="new Date(item.created_at)"
      @loadContent="loadIssues({id: item.id, owner: item.owner.login, repo: item.name })"
      />
  </div>
</div>
</template>

<script>
import { user } from '../../components/user'
import { reviews } from '../../components/reviews'
import { postContent } from '../../components/postContent'

import { mapState, mapActions } from 'vuex'

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
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssuesForRepo'
    }),
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
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data
    })
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchStarred({ limit: 10 })
  }
}
</script>
<style lang="scss" scoped src="./repoList.scss"></style>

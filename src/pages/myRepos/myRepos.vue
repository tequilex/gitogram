<template>
  <div class="c-myRepos">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <template v-else>
      <div class="header">
        <inner-header :title="pageTitle" :qty="repos.length" />
      </div>
      <ul class="posts">
        <li class="post-item" v-for="repo in repos" :key="repo.id">
          <post-content
          :title="repo.name"
          :description="repo.description"
          :forks="repo.forks"
          :stars="repo.stargazers_count"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { innerHeader } from '../../components/innerHeader'
import { postContent } from '../../components/postContent'
import { spinner } from '../../components/spinner'

export default {
  name: 'myRepos',
  components: {
    postContent,
    innerHeader,
    spinner
  },
  props: {
    pageTitle: String
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos.data
    })
  },
  methods: {
    ...mapActions({
      fetchRepos: 'repos/fetchRepos'
    })
  },
  async created () {
    this.loading = true
    try {
      await this.fetchRepos()
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped src='./myRepos.scss'></style>

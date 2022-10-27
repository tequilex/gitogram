<template>
<!-- <pre>{{ user }}</pre> -->
    <div class="topline">
        <topline>
            <template #headline>
              <logo />
                <navigation :src="user.avatar_url" :username="user.login" />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="item in trendings" :key="item.id">
                        <story-user-item
                        v-bind="getFeedData(item)"
                        @onPress="$router.push({name: 'stories', params: {initialSlide: item.id } })"/>
                    </li>
                </ul>
            </template>
        </topline>
    </div>
      <repo-list />
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { repoList } from '../../components/repoList'
import { navigation } from '../../components/navigation'
import { logo } from '../../components/logo'

import { mapState, mapActions } from 'vuex'

import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    repoList,
    navigation,
    logo
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      user: (state) => state.user.data
    })
  },
  data () {
    return {
      items: {}
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      getUser: 'user/getUserData'
    }),
    getFeedData (item) {
      return {
        avatar: item.owner.avatar_url,
        username: item.owner.login
      }
    },
    handlePress (story) {
      console.log(story)
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
    api.trendings.getTrendings()
  },
  mounted () {
    this.fetchTrendings()
    this.getUser()
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>

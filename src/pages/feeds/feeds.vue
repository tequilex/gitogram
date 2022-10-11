<template>
    <div class="topline">
        <topline>
            <template #headline>
              <logo />
                <navigation />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="item in items" :key="item.id">
                        <story-user-item
                        v-bind="getFeedData(item)"
                        @onPress="handlePress(story.id)"/>
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
  data () {
    return {
      items: {}
    }
  },
  methods: {
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
      const { data } = await api.trandings.getTrandings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>

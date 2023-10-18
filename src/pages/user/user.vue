<template>
<div class="topline">
  <topline>
    <template #headline>
      <logo />
      <navigation :src="user.avatar_url" :username="user.login" />
    </template>
  </topline>
</div>
<div class="x-container container">
  <div class="wrapper-user">
    <div class="user">
      <div class="title">My profile</div>
      <my-profile
      :username="user.name"
      :userAvatar="user.avatar_url"
      :login="user.login"
      :repos_qty="repos.length"
      :stars_qty="starred.length"
      />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { navigation } from '../../components/navigation'
import { myProfile } from '../../components/myProfile'

export default {
  name: 'user',
  components: {
    topline,
    logo,
    navigation,
    myProfile
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch('user/getUserData')
      dispatch('starred/fetchStarred')
      dispatch('repos/fetchRepos')
    })
    return {
      user: computed(() => state.user.data),
      repos: computed(() => state.repos.data),
      starred: computed(() => state.starred.data)
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped src='./user.scss'></style>

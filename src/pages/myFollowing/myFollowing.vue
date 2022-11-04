<template>
  <div class="c-myFollowing">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <template v-else>
    <div class="header">
      <inner-header :title="pageTitle" :qty="subscriptionsList.length"/>
    </div>
    <ul class="subscriptions">
      <li class="subscription-item" v-for="subscription in subscriptionsList" :key="subscription.id">
        <subscription
        :avatar="subscription.owner.avatar_url"
        :username="subscription.full_name"
        :type="subscription.owner.type"
        :following="subscription.following"
        @press="changeSubStatus(subscription.id)"
        />
      </li>
    </ul>
    </template>
  </div>
</template>

<script>

import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'

import { innerHeader } from '../../components/innerHeader'
import { subscription } from '../../components/subscription'
import { spinner } from '../../components/spinner'

export default {
  name: 'myFollowing',
  components: {
    innerHeader,
    subscription,
    spinner
  },
  props: {
    pageTitle: String
  },
  setup () {
    const { dispatch, state, getters } = useStore()
    const loading = ref(false)
    const changeSubStatus = (id) => {
      const { following } = getters['starred/getStarredRepo'](id)
      if (following) {
        dispatch('starred/unStarRepo', id)
      } else {
        dispatch('starred/starRepo', id)
      }
    }
    onMounted(() => {
      loading.value = true
      try {
        dispatch('starred/fetchStarred')
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    })
    return {
      subscriptionsList: computed(() => state.starred.data),
      changeSubStatus,
      getStarredRepo: computed(() => getters['starred/getStarredRepo']),
      loading
    }
  }
}
</script>

<style lang="scss" scoped src="./myFollowing.scss"></style>

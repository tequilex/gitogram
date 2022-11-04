<template>
  <div class="c-subscription">
    <div class="user">
      <user
      size="medium"
      :avatar="avatar"
      :username="username"
      :type="type"
      />
    </div>
    <div class="button">
      <x-button
      class="small"
      :theme="following ? 'grey' : 'green'"
      @click="$emit('press')"
      >
        {{following ? 'Following' : 'Unfollowed'}}
      </x-button>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { xButton } from '../button'

export default {
  name: 'subscription',
  components: {
    user,
    xButton
  },
  props: {
    avatar: String,
    username: String,
    type: String,
    following: Boolean
  }
}
</script>

<style lang="scss" scoped src="./subscription.scss"></style>

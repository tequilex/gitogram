<template>
  <div class="c-story-post-item"  :class="{ active }">
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <xProgress :active="actie" @onFinish="$emit('onProgressFinish')"/>
        </div>
        <div class="user">
          <user :avatar="data.avatar" :username="data.username" />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div
          v-if="data.content?.length"
          class="content-text"
          v-html="data.content">
          </div>
          <placeholder v-else :paragraphs="3" />
        </div>
      </div>
      <div class="footer">
        <x-button @click="$emit('followTheRepo')">Following</x-button>
      </div>
      <template v-if="active">
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('next')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prev')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      </template>
    </div>
  </div>
</template>

<script>
import { xProgress } from '../../components/progress'
import { user } from '../../components/user'
import { xButton } from '../../components/button'
import { placeholder } from '../../components/placeholder'
import { spinner } from '../../components/spinner'
import { icon } from '../../icons'

export default {
  name: 'StoryUserItem',
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  components: {
    xProgress,
    user,
    xButton,
    placeholder,
    spinner,
    icon
  }
}
</script>

<style lang="scss" scoped src='./storyPostItem.scss'></style>

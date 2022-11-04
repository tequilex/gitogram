<template>
  <div class="reviews">
    <div class="toggler">
    <toggler @onToggle="toggle" />
    </div>
      <comment-placeholder v-if="loading" />
    <div class="comments" v-if="issues?.length && shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="issue in issues" :key="issue.id">
          <comment :text="issue.title" :username="issue.user.login" />
        </li>
      </ul>
    </div>
  </div>
  <div class="date">{{ transformDate }}</div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { commentPlaceholder } from '../../components/commentPlaceholder'
import { comment } from '../../components/comment'
export default {
  name: 'reviews',
  components: {
    toggler,
    commentPlaceholder,
    comment
  },
  emits: ['loadContent'],
  props: {
    text: {
      type: String
    },
    username: {
      type: String
    },
    loading: {
      type: Boolean
    },
    date: {
      type: Date
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      shown: false
    }
  },
  computed: {
    transformDate () {
      const date = new Date(this.date)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./reviews.scss"></style>

import storyUserItem from './storyUserItem.vue'
import stories from '../../pages/feeds/data.json'

export default {
  title: 'storyUserItem',
  component: { storyUserItem }
}

const template = () => ({
  components: { storyUserItem },
  data () {
    return {
      stories
    }
  },
  template: `
  <story-user-item v-for="story in stories" :key="story.id"
  :avatar="story.avatar"
  :username="story.username"
  />`
})

export const Default = template.bind({})

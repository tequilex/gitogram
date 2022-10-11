import topline from './topline.vue'
import logo from '../logo/logo.vue'
import navigation from '../navigation/navigation.vue'
import storyUserItem from '../storyUserItem/storyUserItem.vue'
import stories from '../../pages/feeds/data.json'

export default {
  title: 'topline',
  component: {
    topline,
    logo,
    navigation,
    storyUserItem
  }
}

const template = () => ({
  components: {
    topline,
    logo,
    navigation,
    storyUserItem
  },
  data () {
    return {
      stories
    }
  },
  template: `
  <topline>
  <template #headline>
              <logo />
                <navigation />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                        :avatar="story.avatar"
                        :username="story.username"
                        @onPress="handlePress(story.id)"/>
                    </li>
                </ul>
            </template>
  </topline>
  `
})

export const Default = template.bind({})

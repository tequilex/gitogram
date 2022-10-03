<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <icon name="logo" />
                </div>
                <div class="navigation">
                  <div class="home-img">
                    <icon name="home" />
                  </div>
                  <div class="profile-img">
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg" class="img-avatar" alt="user photo">
                  </div>
                  <div class="exit-img">
                    <icon name="exit" />
                  </div>
                </div>
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
    </div>
    <div class="userPost">
      <user-post>
        <template #postContent>
          <div class="post-title">Vue.js</div>
          <div class="post-desc">
            <span><b>Javascript</b> framework for building interactive web applications ⚡</span>
          </div>
          <div class="metrics__wrap">
        <button class="metric__item">
            <icon name="star" />
            <div class="metric__item-title">Star</div>
        </button>
        <button class="metric__item">156K</button>
        <button class="metric__item">
            <icon name="fork" />
            <div class="metric__item-title">Fork</div>
        </button>
        <button class="metric__item">4</button>
      </div>
        </template>
      </user-post>
    </div>

    <div class="userPost">
      <user-post>
        <template #postContent>
          <div class="post-title">React.js</div>
          <div class="post-desc">
            <span><b>Open source</b> JavaScript library used for designing user interfaces</span>
          </div>
          <div class="metrics__wrap">
        <button class="metric__item">
            <icon name="star" />
            <div class="metric__item-title">Star</div>
        </button>
        <button class="metric__item">156K</button>
        <button class="metric__item">
            <icon name="fork" />
            <div class="metric__item-title">Fork</div>
        </button>
        <button class="metric__item">4</button>
      </div>
        </template>
      </user-post>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { userPost } from '../../components/userPost'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    userPost
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handlePress (story) {
      console.log(story)
    }
  }
}
</script>

<style lang="scss" scoped>
  .topline {
    background: #FAFAFA;
    box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  }
.navigation {
    display: flex;
    align-items: center;
  }

  .home-img {
    color: #262626;
    width: 26px;
    height: 25px;
    margin-right: 28px;
  }

  .profile-img {
    margin-right: 24px;
  }

  .img-avatar {
    width: 37px;
    height: 37px;
    border-radius: 50px;
  }

  .exit-img {
    color: #262626;
    width: 30px;
    height: 20px;
  }

  .stories {
    display: flex;
    justify-content: space-between;
  }
  .userPost {
    margin-bottom: 24px;
  }
.post-title {
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #292929
}
.post-desc {
  margin-bottom: 32px;
}
.metrics__wrap {
    border: 2px solid rgba(27,31,35,.15);
    border-radius: 10px;
    display: inline-flex;
}
.metric__item {
    display: flex;
    padding: 6px 12px;
    border-right: 2px solid rgba(27, 31, 35, 0.15);

  &:nth-child(odd){
    background: #FAFBFC;
  }
  &:first-child{
    border-radius: 10px 0 0 10px;
  }
  &:last-child{
    border-right: none;
  }
}
</style>

<template>
<!-- <pre>{{ trendings }}</pre> -->
  <div class="c-stories-slider">
    <div class="x-container">
      <div class="stories-container">
        <ul
        class="stories"
        ref="slider">
          <li
          class="stories-item"
          ref="item"
          v-for="(trending, ndx ) in trendings"
          :key="trending.id"
          >
            <story-post-item
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @next="handleSlide(ndx + 1)"
            @prev="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            @followTheRepo="starRepo(trending.id)"
            @unFollowTheRepo="unStarRepo(trending.id)"
            />
          </li>
        </ul>
        <!-- <pre>{{ trendings }}</pre> -->
      </div>
    </div>
  </div>
</template>

<script>
import { storyPostItem } from '../storyPostItem'
import { mapState, mapActions } from 'vuex'

export default {
  components: { storyPostItem },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    // starRepo (li, ol, al) {
    //   console.log(li, ol, al)
    // },
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following,
        loading: obj.loading
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10)

      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    console.log(this.initialSlide)
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }

    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style lang="scss" scoped src="./storiesSlider.scss"></style>

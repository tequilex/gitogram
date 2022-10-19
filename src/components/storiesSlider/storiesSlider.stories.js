import storiesSlider from './storiesSlider.vue'

export default {
  title: 'storiesSlider',
  component: { storiesSlider }
}

const template = () => ({
  components: { storiesSlider },
  template: '<storiesSlider />'
})

export const Default = template.bind({})

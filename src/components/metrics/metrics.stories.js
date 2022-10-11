import metrics from './metrics.vue'

export default {
  title: 'metrics',
  component: { metrics }
}

const template = () => ({
  components: { metrics },
  template: '<metrics :stars="33" :forks="55" />'
})

export const Default = template.bind({})

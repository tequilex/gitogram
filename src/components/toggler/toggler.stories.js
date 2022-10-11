import toggler from './toggler.vue'

export default {
  title: 'toggler',
  component: { toggler }
}

const template = () => ({
  components: { toggler },
  template: '<toggler @onToggle="toggle" />'
})

export const Default = template.bind({})

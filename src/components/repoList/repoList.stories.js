import repoList from './repoList.vue'

export default {
  title: 'repoList',
  component: { repoList }
}

const template = () => ({
  components: { repoList },
  template: '<repo-list v-for="n in 2" :key="n" />'
})

export const Default = template.bind({})

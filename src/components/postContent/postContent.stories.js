import postContent from './postContent.vue'

export default {
  title: 'postContent',
  component: { postContent }
}

const template = () => ({
  components: { postContent },
  template: `<postContent 
  title="Vue JS"
  description="lorem is asfgiosgjiopewrsjpghioajsiohasIPHre"
  v-bind:stars="64"
  v-bind:forks="463"
  />`
})

export const Default = template.bind({})

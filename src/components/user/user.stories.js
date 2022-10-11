import user from './user.vue'

export default {
  title: 'user',
  component: { user }
}

const template = () => ({
  components: { user },
  template: `<user
  avatar="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
  username="pppppp"
  />`
})

export const Default = template.bind({})

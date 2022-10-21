<template>
  <div class="auth">
    <div class="auth-content">
      <div class="logo">
        <logo />
      </div>
      <div class="text">
        More than just one repository.
        <br>
        This is our digital world.
      </div>
      <div class="auth-button">
        <x-button @click="redirectToAuth">
          <span class="button-content">
            <span class="button-text">Authorize with github</span>
            <icon name="github" />
          </span>
        </x-button>
      </div>
      <div class="auth-img">
        <img src="../../assets/auth-img.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { xButton } from '../../components/button'
import env from '../../../env'

import { mapActions } from 'vuex'

export default {
  name: 'auth',
  components: {
    logo,
    xButton,
    icon
  },
  methods: {
    ...mapActions({
      redirectToAuth: 'auth/getAuthCode',
      authUserForCode: 'auth/authUserForCode'
    })
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserForCode(code)
      localStorage.setItem('token', token)
      // console.log(token)
      this.$router.replace({ name: 'feeds' })
      window.location = env.redirect_url
    }
  }

}
</script>

<style lang="scss" scoped src="./auth.scss"></style>

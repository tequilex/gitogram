import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.sendUserToAuthPage()
    },

    async authUserForCode (store, code) {
      const { data } = await api.auth.getTokenByCode(code)
      // console.log(data)
      return data.token
    },

    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}

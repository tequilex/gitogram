import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async getUserData ({ commit }) {
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USER', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}

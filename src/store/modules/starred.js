import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STARRED: (state, starred) => {
      state.data = starred.map((repo) => {
        repo.following = true
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo
        if (payload.id === editedRepo.id) {
          editedRepo.following = payload.following
        }
        return editedRepo
      })
    }
  },
  getters: {
    getStarredRepo: (state) => (id) => state.data.find((repo) => repo.id === id)
  },
  actions: {
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await api.starred.getStarredRepos({ limit: payload?.limit })

        commit('SET_STARRED', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async starRepo ({ commit, getters, rootState }, id) {
      console.log(rootState)
      const { name: repo, owner } = getters.getStarredRepo(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: true })
        console.log()
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}

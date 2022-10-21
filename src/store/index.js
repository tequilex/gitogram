import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
export default createStore({
  modules: {
    trendings,
    auth
  }
})

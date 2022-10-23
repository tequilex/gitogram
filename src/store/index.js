import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
import starred from './modules/starred'
export default createStore({
  modules: {
    trendings,
    auth,
    starred
  }
})

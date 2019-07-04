import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const initState = {
  list: {
    items: [],
    total: 0
  },
  detail: {},
  form: {
    location: {}
  }
}

export default {
  namespaced: true,
  state: {
    ...initState,
    getInitState () {
      return initState
    }
  },
  getters,
  actions,
  mutations
}

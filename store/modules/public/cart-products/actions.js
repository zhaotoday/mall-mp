import types from './types'

export default {
  setItems ({ commit }, { items }) {
    commit(types.SET_ITEMS, { items })
  }
}

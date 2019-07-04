import types from './types'

export default {
  addNumber ({ commit }, { item, specification }) {
    commit(types.ADD_NUMBER, { item, specification })
  },
  subtractNumber ({ commit }, { item, specification }) {
    commit(types.SUBTRACT_NUMBER, { item, specification })
  },
  checkItem ({ commit }, { item }) {
    commit(types.CHECK_ITEM, { item })
  },
  checkAllItems ({ commit }) {
    commit(types.CHECK_ALL_ITEMS)
  }
}

import types from './types'

export default {
  addItem ({ commit }, { item }) {
    commit(types.ADD_ITEM, { item })
  },
  setItems ({ commit }, { items }) {
    commit(types.SET_ITEMS, { items })
  },
  addNumber ({ commit }, { item, specification }) {
    commit(types.ADD_NUMBER, { item, specification })
  },
  subtractNumber ({ commit }, { item, specification }) {
    commit(types.SUBTRACT_NUMBER, { item, specification })
  }
}

import types from './types'

export default {
  [types.SET_ITEMS] (state, { items }) {
    state.items = items
  },
  [types.GET_ITEMS] (state) {
    return state.items
  }
}

import types from './types'
import Model from '@/models/wx/deliveries'

export default {
  async getList ({ commit }, { query }) {
    const { data } = await new Model().GET({ query })
    commit(types.GET_LIST, { data })
    return data
  },

  async getDetail ({ commit }, { id }) {
    const { data } = await new Model().GET({ id })
    commit(types.GET_DETAIL, { data })
    return data
  },

  post ({ commit }, { body }) {
    return new Model().POST({ body })
  },

  put ({ commit }, { id, body }) {
    return new Model().PUT({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  },

  postAction ({ commit }, { query, body }) {
    return new Model().addPath('actions').POST({ query, body })
  },

  setForm ({ commit }, { key, value }) {
    commit(types.SET_FORM, { key, value })
  }
}

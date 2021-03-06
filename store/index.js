import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import wxb from '@/utils/wxb'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['public/cartProducts'],
      storage: {
        getItem: key => wxb.getStorageSync(key),
        setItem: (key, value) => wxb.setStorageSync(key, value),
        removeItem: key => wxb.removeStorageSync(key)
      }
    })
  ],
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    'public/wxUsers': require('./modules/public/wx-users').default,
    'public/ads': require('./modules/public/ads').default,
    'public/categories': require('./modules/public/categories').default,
    'public/helpers': require('./modules/public/helpers').default,
    'public/products': require('./modules/public/products').default,
    'public/cartProducts': require('./modules/public/cart-products').default,
    'public/coupons': require('./modules/public/coupons').default,
    'public/couponActivities': require('./modules/public/coupon-activities').default,
    'wx/wxUsers': require('./modules/wx/wx-users').default,
    'wx/points': require('./modules/wx/points').default,
    'wx/addresses': require('./modules/wx/addresses').default,
    'wx/collections': require('./modules/wx/collections').default,
    'wx/coupons': require('./modules/wx/coupons').default,
    'wx/wxUserCoupons': require('./modules/wx/wx-user-coupons').default,
    'wx/footprints': require('./modules/wx/footprints').default,
    'wx/orders': require('./modules/wx/orders').default,
    'wx/deliveries': require('./modules/wx/deliveries').default,
    'wx/payments': require('./modules/wx/payments').default,
    'wx/merchants': require('./modules/wx/merchants').default
  }
})

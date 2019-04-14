import Vue from 'vue'
import App from '@/app'
import store from '@/store'
import globalPlugin from '@/plugins/global'
import '@/utils/init'

Vue.config.productionTip = false

Vue.use(globalPlugin)

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})

app.$mount()

import { mapActions } from 'vuex'
import $consts from '@/utils/consts'

export default {
  data () {
    return { $consts }
  },
  methods: {
    ...mapActions({
      resetState: 'resetState'
    }),
    navigateTo (url) {
      this.$wx.navigateTo({ url })
    },
    switchTab (url) {
      this.$wx.switchTab({ url })
    }
  }
}

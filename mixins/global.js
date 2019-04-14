import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      resetState: 'resetState'
    }),
    navigateTo (url) {
      this.$wx.navigateTo({ url })
    }
  }
}

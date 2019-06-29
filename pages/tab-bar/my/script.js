export default {
  onShow () {
    if (!this.$auth.loggedIn()) {
      this.$wx.navigateTo({ url: this.$consts.LOGIN_PAGE })
    }
  },
  computed: {
    user () {
      return this.$auth.get()['user']
    }
  }
}

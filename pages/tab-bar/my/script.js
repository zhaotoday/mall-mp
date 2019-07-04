export default {
  data () {
    return {
      user: {}
    }
  },
  onShow () {
    if (!this.$auth.loggedIn()) {
      this.$wx.navigateTo({ url: this.$consts.LOGIN_PAGE })
    }
    this.user = this.$auth.get()['user']
  }
}

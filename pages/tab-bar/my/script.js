export default {
  data () {
    return {
      user: {}
    }
  },
  async onShow () {
    await this.loggedIn()
    this.user = this.$auth.get()['user']
  }
}

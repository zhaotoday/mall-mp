export default {
  data () {
    return {
      user: {}
    }
  },
  async onShow () {
    await this.loggedIn()
    await this.phoneNumberBound()
    this.user = this.$auth.get()['user']

    this.$store.dispatch('public/categories/setId', { id: 0 })
  }
}

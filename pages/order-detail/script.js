export default {
  data () {
    return {
      detail: {}
    }
  },
  async onShow () {
    this.detail = await this.getDetail()
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('wx/orders/getDetail', {
        id: this.$mp.query.id || 102
      })
    }
  }
}

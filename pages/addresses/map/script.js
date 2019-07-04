import CSearch from '@/components/search'

export default {
  components: {
    CSearch
  },
  data () {
    return {
      location: {}
    }
  },
  async onShow () {
    this.location = await this.$wx.getLocation({ type: 'gcj02' })
  },
  methods: {
    search () {}
  }
}

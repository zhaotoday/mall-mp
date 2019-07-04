import CSearch from '@/components/search'
import map from '@/utils/map'

export default {
  components: {
    CSearch
  },
  data () {
    return {
      location: {},
      addresses: []
    }
  },
  async onShow () {
    this.location = await this.$wx.getLocation({ type: 'gcj02' })
    this.addresses = await map.getNearbyAddresses({
      location: this.location,
      keywords: ''
    })
  },
  methods: {
    search () {}
  }
}

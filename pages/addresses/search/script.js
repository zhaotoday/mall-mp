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
  async onLoad () {
    this.location = await this.$wx.getLocation({ type: 'gcj02' })
    this.addresses = await map.getNearbyAddresses({
      location: this.location,
      keywords: ''
    })
  },
  methods: {
    async search () {
      this.addresses = await map.getNearbyAddresses({
        location: this.location,
        keywords: ''
      })
    }
  }
}

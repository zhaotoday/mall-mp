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
  },
  methods: {
    async search () {
      const keywords = this.$refs.search.getValue().trim()

      if (keywords) {
        this.addresses = await map.getNearbyAddresses({
          location: this.location,
          keywords: this.$refs.search.getValue().trim()
        })
      } else {
        this.addresses = []
      }
    },
    select (item) {
      this.$store.dispatch('wx/addresses/setForm', {
        key: 'location',
        value: item
      })
      this.$wx.navigateBack({
        delta: 2
      })
    }
  }
}

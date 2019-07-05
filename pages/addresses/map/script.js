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
    const { longitude = '', latitude = '' } = this.$mp.query

    this.mapContext = wx.createMapContext('map')

    this.location = longitude ?
      { longitude, latitude }
      : await this.$wx.getLocation({ type: 'gcj02' })
    this.addresses = await map.getNearbyAddresses({
      location: this.location,
      keywords: ''
    })
  },
  methods: {
    handleRegionChange (e) {
      if (e.type === 'end') {
        this.mapContext.getCenterLocation({
          success: async ({ longitude, latitude }) => {
            this.location = { longitude, latitude }
            this.addresses = await map.getNearbyAddresses({
              location: this.location,
              keywords: ''
            })
          }
        })
      }
    },
    select (item) {
      this.$store.dispatch('wx/addresses/setForm', {
        key: 'location',
        value: item
      })
      this.$wx.navigateBack()
    }
  }
}

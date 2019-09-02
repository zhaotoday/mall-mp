import CSearch from '@/components/search'
import CDialog from '@/components/dialog'
import map from '@/utils/map'

export default {
  components: { CSearch, CDialog },
  data () {
    return {
      location: {
        longitude: '',
        latitude: ''
      },
      addresses: [],
      cConfirm: {
        visible: false
      }
    }
  },
  async onShow () {
    const { longitude = '', latitude = '' } = this.$mp.query

    this.mapContext = wx.createMapContext('map')

    if (longitude) {
      this.location.longitude = longitude
      this.location.latitude = latitude
    } else {
      try {
        this.location = await this.$wx.getLocation({ type: 'gcj02' })

        this.addresses = await map.getNearbyAddresses({
          location: this.location,
          keywords: ''
        })
      } catch (e) {
        this.cConfirm.visible = true
      }
    }
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
    },
    async handleConfirm () {
      this.cConfirm.visible = false

      await this.$wx.openSetting()
    }
  }
}

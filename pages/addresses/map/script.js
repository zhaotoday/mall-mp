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

    if (longitude) {
      this.location = { longitude, latitude }
    } else {
      const getSettingRes = await this.$wx.getSetting()

      if (!getSettingRes.authSetting['scope.userLocation']) {
        await this.$wx.showModal({
          title: '请确认',
          content: '需要获取您的位置信息，请到小程序的设置打开授权'
        })

        const openSettingRes = await this.$wx.openSetting()

        if (openSettingRes.authSetting['scope.userLocation']) {
          this.location = await this.$wx.getLocation({ type: 'gcj02' })
        } else {
          this.$wx.showToast({ title: '授权失败' })
        }
      } else {
        this.location = await this.$wx.getLocation({ type: 'gcj02' })
      }

      this.addresses = await map.getNearbyAddresses({
        location: this.location,
        keywords: ''
      })
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
    }
  }
}

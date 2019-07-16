import productsMixin from '@/mixins/products'
import CEmpty from '@/components/empty'
import CDialog from '@/components/dialog'

export default {
  mixins: [productsMixin],
  components: { CEmpty, CDialog },
  data () {
    return {
      status: '',
      cTabs: {
        current: ''
      },
      list: {
        items: [],
        total: 0
      },
      cReachConfirm: {
        visible: false,
        id: 0
      }
    }
  },
  async onShow () {
    if (this.$mp.query.status) {
      this.cTabs.current = this.$mp.query.status
    }
    this.list = await this.getList()
    this.loaded = true
  },
  methods: {
    async changeTab (item) {
      this.cTabs.current = item.value
      this.list = await this.getList()
    },
    async getList () {
      const { data } = await this.$store.dispatch('wx/orders/postAction', {
        body: {
          type: 'GET_DISPATCH'
        },
        query: {
          where: {
            dispatcherId: {
              $eq: this.$auth.get()['user'].id
            },
            status: {
              $eq: this.cTabs.current
            }
          },
          offset: 0,
          limit: 1000
        }
      })

      return data
    },
    showReachConfirm (item) {
      this.cReachConfirm.id = item.id
      this.cReachConfirm.visible = true
    },
    reach () {
      this.$store.dispatch('wx/orders/postAction', {
        body: {
          type: 'REACH',
          id: this.cReachConfirm.id
        }
      })
      this.$wx.showToast({
        title: '订单已配送完成'
      })
      this.cReachConfirm.visible = false
      this.changeTab({ value: '4' })

    },
    openLocation (location) {
      this.$wx.openLocation({
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
        scale: 16
      })
    },
    makePhoneCall (phoneNumber) {
      this.$wx.makePhoneCall({ phoneNumber })
    }
  }
}

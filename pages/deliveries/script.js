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
      cFinishConfirm: {
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
      const { data } = await this.$store.dispatch('wx/deliveries/postAction', {
        body: {
          type: 'GET'
        },
        query: {
          where: {
            delivererId: {
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
      this.cFinishConfirm.id = item.id
      this.cFinishConfirm.visible = true
    },
    finish () {
      this.$store.dispatch('wx/deliveries/postAction', {
        body: {
          type: 'FINISH',
          id: this.cFinishConfirm.id
        }
      })
      this.$wx.showToast({
        title: '订单已配送完成'
      })
      this.cFinishConfirm.visible = false
      this.changeTab({ value: 'FINISH' })
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

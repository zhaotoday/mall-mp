import { mapState } from 'vuex'
import productsMixin from '@/mixins/products'
import CEmpty from '@/components/empty'

export default {
  mixins: [productsMixin],
  components: { CEmpty },
  data () {
    return {
      status: '',
      cTabs: {
        current: ''
      }
    }
  },
  computed: mapState({
    list: state => state['wx/orders'].list
  }),
  async onShow () {
    if (this.$mp.query.status) {
      this.cTabs.current = this.$mp.query.status
    }
    await this.getList()
    this.loaded = true
  },
  methods: {
    async changeTab (item) {
      this.cTabs.current = item.code
      await this.getList()
    },
    getList () {
      return this.$store.dispatch('wx/orders/getList', {
        query: {
          where: {
            wxUserId: {
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
    },
    async pay (order) {
      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          id: order.id,
          payWay: '1',
          paidMoney: order.paidMoney
        }
      })

      await this.$wx.requestPayment(data)

      this.$wx.redirectTo({
        url: '/pages/orders/index?status=2'
      })

      this.cTabs.current = '2'
    },
    clone (order) {
      this.$store.dispatch('public/cartProducts/setItems', {
        items: order.products
      })
      this.$wx.switchTab({
        url: '/pages/tab-bar/cart/index'
      })
    }
  }
}

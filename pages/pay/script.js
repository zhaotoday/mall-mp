import { mapState } from 'vuex'
import cartUtils from '@/utils/cart'

export default {
  computed: {
    ...mapState({
      cartDetail: state => state['wx/carts'].detail,
      ordersForm: state => state['wx/orders'].form
    }),
    totalPrice () {
      return cartUtils.getTotalPrice(this.cartDetail.data)
    }
  },
  data () {
    return {
      cartId: 0,
      cPayWay: {
        index: 0,
        range: this.$consts.PAY_WAYS.map(item => item.label)
      }
    }
  },
  onShow () {
    this.cartId = this.$mp.query.cartId
    this.getCartsDetail()
  },
  methods: {
    getCartsDetail () {
      this.$store.dispatch('wx/carts/getDetail', { id: this.cartId })
    },
    handlePayWayChange (e) {
      this.cPayWay.index = e.detail.value
    },
    async handlePay () {
      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          cartId: parseInt(this.cartId, 10),
          payMoney: this.totalPrice,
          remark: 'abc'
        }
      })

      const res = await this.$wx.requestPayment(data)
      console.log(res)
    }
  }
}

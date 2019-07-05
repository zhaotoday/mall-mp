import { mapState } from 'vuex'
import cartUtils from '@/utils/cart'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  mixins: [cartProductsMxins],
  computed: {
    ...mapState({
      ordersForm: state => state['wx/orders'].form
    }),
    totalPrice () {
      return cartUtils.getTotalPrice(this.cartProducts)
    }
  },
  data () {
    return {
      cPayWay: {
        index: 0,
        range: this.$consts.PAY_WAYS.map(item => item.label)
      }
    }
  },
  methods: {
    handlePayWayChange (e) {
      this.cPayWay.index = e.detail.value
    },
    async handlePay () {
      const { address, remark } = this.ordersForm
      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          addressId: address.id,
          couponId: 0,
          deliveryId: 0,
          remark: remark.value,
          paidMoney: this.totalPrice,
          products: this.cartProducts
        }
      })

      const res = await this.$wx.requestPayment(data)
      console.log(res)
    }
  }
}

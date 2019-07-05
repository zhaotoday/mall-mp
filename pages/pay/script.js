import { mapState } from 'vuex'
import cartUtils from '@/utils/cart'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  mixins: [productsMixin, cartProductsMxins],
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
    async pay () {
      const { address, remark } = this.ordersForm

      if (!address.id) {
        this.$wx.showToast({
          title: '请选择收货地址'
        })
        return
      }

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

      try {
        await this.$wx.requestPayment(data)
        this.$wx.navigateTo({
          url: `/pages/orders/index`
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}

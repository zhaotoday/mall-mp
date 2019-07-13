import CCheckbox from '../checkbox/index'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  mixins: [cartProductsMxins],
  methods: {
    async handleGoToPay () {
      const { ORDER_MIN_PRICE } = this.$consts

      if (this.totalPrice < ORDER_MIN_PRICE) {
        this.$wx.showToast({
          title: `满 ￥${ORDER_MIN_PRICE} 才可下单`
        })
      } else {
        this.$wx.navigateTo({ url: `/pages/pay/index` })
      }
    }
  }
}

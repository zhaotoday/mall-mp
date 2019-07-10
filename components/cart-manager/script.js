import CCheckbox from '../checkbox/index'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  mixins: [cartProductsMxins],
  methods: {
    async handleGoToPay () {
      this.$wx.navigateTo({ url: `/pages/pay/index` })
    }
  }
}

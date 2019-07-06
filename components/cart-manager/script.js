import { mapGetters } from 'vuex'
import CCheckbox from '../checkbox/index'
import cartUtils from '@/utils/cart'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  mixins: [cartProductsMxins],
  created () {
    console.log(this.$store)
  },
  methods: {
    async handleGoToPay () {
      this.$wx.navigateTo({ url: `/pages/pay/index` })
    }
  }
}

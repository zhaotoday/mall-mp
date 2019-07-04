import { mapGetters } from 'vuex'
import CCheckbox from '../checkbox/index'
import cartUtils from '@/utils/cart'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  mixins: [cartProductsMxins],
  computed: {
    ...mapGetters({
      checkedProducts: 'public/cartProducts/checkedItems'
    }),
    totalPrice () {
      return cartUtils.getTotalPrice(this.checkedProducts)
    }
  },
  created () {
    console.log(this.$store)
  },
  methods: {
    async handleGoToPay () {
      const { data: { id } } = await this.$store.dispatch('wx/carts/postAction', {
        body: { type: 'CLOSE' }
      })

      this.$wx.navigateTo({ url: `/pages/pay/index?cartId=${id}` })
    }
  }
}

import CCheckbox from '../checkbox/index'
import cartUtils from '@/utils/cart'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  props: {
    cartProducts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    checkedProducts () {
      return this.cartProducts.filter(item => item.checked)
    },
    totalPrice () {
      return cartUtils.getTotalPrice(this.checkedProducts)
    }
  },
  methods: {
    handleCheckboxChange () {
      if (this.cartProducts.find(item => !item.checked)) {
        this.$emit('check', true)
      } else {
        this.$emit('check', false)
      }
    },
    async handleGoToPay () {
      const { data: { id } } = await this.$store.dispatch('wx/carts/postAction', {
        body: { type: 'CLOSE' }
      })

      this.$wx.navigateTo({ url: `/pages/pay/index?cartId=${id}` })
    }
  }
}

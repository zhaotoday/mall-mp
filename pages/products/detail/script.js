import CProductActions from '@/components/product-actions'
import CSpecifications from '@/components/specifications'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CProductActions, CSpecifications },
  mixins: [cartProductsMxins],
  data () {
    return {
      cSpecifications: {
        current: -1
      },
      detail: {}
    }
  },
  async onShow () {
    this.id = this.$mp.query.id || 17
    this.detail = this.addCartKeys(await this.getDetail())
    console.log(this.detail, '---')

    this.cartProducts = this.getCartProducts()
    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })
    },
    handleSpecificationChange (e) {
      this.cSpecifications.current = +e.detail.value
    }
  }
}

import CProductActions from '@/components/product-actions'
import CSpecifications from '@/components/specifications'
import cartProductsMxins from '@/mixins/cart-products'
import CAddToCart from '@/components/add-to-cart'

export default {
  components: { CProductActions, CSpecifications, CAddToCart },
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
    this.id = this.$mp.query.id

    this.detail = this.addCartKeys(await this.getDetail())

    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })
    },
    changeSpecification (e) {
      this.cSpecifications.current = +e.detail.value
    }
  }
}

import CCartManager from '@/components/cart-manager/index'
import CProducts from '@/components/products'
import CEmpty from '@/components/empty'
import CDialog from '@/components/dialog'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CProducts, CCartManager, CEmpty, CDialog },
  mixins: [productsMixin, cartProductsMxins],
  data () {
    return {
      cPriceConfirm: {
        visible: false
      }
    }
  },
  async onShow () {
    this.$store.dispatch('public/categories/setId', { id: 0 })

    const isProductPricesChanged = await this.isProductPricesChanged()

    if (isProductPricesChanged) {
      this.cPriceConfirm.visible = true
    }
  }
}

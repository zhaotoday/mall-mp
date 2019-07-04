import CCartManager from '@/components/cart-manager/index'
import CProducts from '@/components/products'
import CEmpty from '@/components/empty'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CProducts, CCartManager, CEmpty },
  mixins: [productsMixin, cartProductsMxins]
}

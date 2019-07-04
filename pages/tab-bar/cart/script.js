import CCartManager from '@/components/cart-manager/index'
import CProducts from '@/components/products'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CProducts, CCartManager },
  mixins: [productsMixin, cartProductsMxins]
}

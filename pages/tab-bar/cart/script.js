import CCheckbox from '@/components/checkbox'
import CCartManager from '@/components/cart-manager/index'
import CNumberInput from '@/components/number-input/index'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: {CNumberInput, CCartManager, CCheckbox},
  mixins: [productsMixin, cartProductsMxins]
}

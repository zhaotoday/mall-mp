import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'
import CNumberInput from '@/components/number-input'
import CCheckbox from '@/components/checkbox'

export default {
  name: 'c-products',
  components: { CNumberInput, CCheckbox },
  mixins: [productsMixin, cartProductsMxins],
  props: {
    items: {
      type: Array,
      default: () => []
    },
    editable: {
      type: Boolean,
      default: false
    }
  }
}

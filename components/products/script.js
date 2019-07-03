import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'
import CNumberInput from '@/components/number-input'

export default {
  name: 'c-products',
  components: { CNumberInput },
  mixins: [productsMixin, cartProductsMxins],
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    listItems () {
      console.log(this.items, 333)
      return this.items
    }
  }
}

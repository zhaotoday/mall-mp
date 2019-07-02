import CAddToCart from '../add-to-cart'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  name: 'c-product-actions',
  components: { CAddToCart },
  mixins: [cartProductsMxins],
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    specificationIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      collectedProductIds: []
    }
  },
  computed: {
    collected () {
      return !!this.collectedProductIds.find(item => item === this.item.id)
    }
  },
  async created () {
    this.collectedProductIds = await this.getCollectedProductIds()
  },
  methods: {
    async getCollectedProductIds () {
      const { data } = await this.$store.dispatch('wx/collections/postAction', {
        body: { type: 'GET' }
      })

      return data
    },
    async collect () {
      await this.$store.dispatch('wx/collections/postAction', {
        body: {
          type: this.collected ? 'CANCEL' : 'ADD',
          productId: this.item.id
        }
      })
      this.collectedProductIds = await this.getCollectedProductIds()
    }
  }
}

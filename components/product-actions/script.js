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
    },
    detail () {
      return this.item
    }
  },
  async created () {
    if (this.$auth.loggedIn()) {
      this.collectedProductIds = await this.getCollectedProductIds()
    }
  },
  methods: {
    async getCollectedProductIds () {
      const { data } = await this.$store.dispatch('wx/collections/postAction', {
        body: { type: 'GET' }
      })

      return data
    },
    async collect () {
      await this.loggedIn()
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

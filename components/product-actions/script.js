export default {
  name: 'c-product-actions',
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

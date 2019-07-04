import CSearch from '@/components/search'
import CSort from '@/components/sort'
import CProducts from '@/components/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CSearch, CSort, CProducts },
  mixins: [cartProductsMxins],
  data () {
    return {
      keywords: '',
      productsList: {
        items: [],
        total: 0
      }
    }
  },
  async onLoad () {
    this.keywords = this.$mp.query.keywords
    this.productsList = await this.getProductsList()
    this.loaded = true
  },
  methods: {
    async search () {
      this.keywords = this.$refs.search.getValue().trim()
      this.productsList = await this.getProductsList()
    },
    async getProductsList () {
      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: {
          where: { name: { $like: this.keywords } },
          limit: 1000
        }
      })

      return {
        items: items.map(item => this.addCartKeys(item)),
        total
      }
    },
    handleSortChange (item) {
      console.log(item)
    }
  }
}

import CSearch from '@/components/search'
import CSort from '@/components/sort'
import CProducts from '@/components/products'
import CEmpty from '@/components/empty'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CSearch, CSort, CProducts, CEmpty },
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
    const { keywords, categoryId, categoryName } = this.$mp.query
    this.keywords = keywords
    this.categoryId = categoryId
    this.categoryName = categoryName

    this.$wx.setNavigationBarTitle({
      title: this.categoryName ? this.categoryName : '搜索结果'
    })

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
          where: {
            name: { $like: this.keywords },
            categoryId: this.categoryId
          },
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

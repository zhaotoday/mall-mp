import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'
import CSearch from '@/components/search'
import CNumberInput from '@/components/number-input/index'
import CProducts from '@/components/products'
import categoriesMixin from '@/mixins/categories'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CNumberInput, CSwiper, CSearch, CProducts },
  mixins: [categoriesMixin, productsMixin, cartProductsMxins],
  data () {
    return {
      hotProductsList: {
        items: [],
        total: 0
      }
    }
  },
  computed: {
    ...mapState({
      adsList: state => state['public/ads'].list
    }),
    adsImages () {
      return this.adsList.items.map(item => this.$helpers.getImageURL({ id: item.picture, width: 750, height: 300 }))
    }
  },
  async onShow () {
    console.log(this.$store, 3333)
    this.getAdsList()
    this.getCategoriesList()

    this.hotProductsList = await this.getProductsList()
  },
  methods: {
    getAdsList () {
      return this.$store.dispatch('public/ads/getList', {
        query: {}
      })
    },
    async getProductsList () {
      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: { limit: 1000 }
      })

      return {
        items: items.map(item => this.addCartKeys(item)),
        total
      }
    },
    goCategories (id) {
      this.$store.dispatch('public/categories/setId', { id })
      this.$wx.switchTab({ url: '/pages/tab-bar/categories/index' })
    }
  }
}

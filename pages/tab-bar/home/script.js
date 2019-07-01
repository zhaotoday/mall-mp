import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'
import CSearch from '@/components/search'
import CNumberInput from '@/components/number-input/index'
import categoriesMixin from '@/mixins/categories'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CNumberInput, CSwiper, CSearch },
  mixins: [categoriesMixin, productsMixin, cartProductsMxins],
  data () {
    return {
      productsList: {
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
      return this.adsList.items.map(item => this.$helpers.getImageById(item.picture))
    }
  },
  async onShow () {
    this.getAdsList()
    this.getCategoriesList()

    this.productsList = await this.getProductsList()
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
        items: items.map(item => {
          const cartProduct = this.cartProducts.find(product => product.id === item.id)

          return {
            ...item,
            visible: cartProduct
              ? !!(cartProduct.specifications.find(cartSpecification => !!cartSpecification.number))
              : false,
            checked: false,
            number: cartProduct ? cartProduct.number : 0,
            specifications: item.specifications
              ? item.specifications.map(specification => {
                const cartSpecification = cartProduct
                  ? cartProduct.specifications.find(cartSpecification => cartSpecification.value === specification.value)
                  : null

                return {
                  ...specification,
                  number: cartSpecification ? cartSpecification.number : 0
                }
              })
              : []
          }
        }) || [],
        total
      }
    },
    goCategories (id) {
      this.$store.dispatch('public/categories/setId', { id })
      this.$wx.switchTab({ url: '/pages/tab-bar/categories/index' })
    }
  }
}

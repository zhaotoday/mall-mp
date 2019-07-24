import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'
import CSearch from '@/components/search'
import CNumberInput from '@/components/number-input/index'
import CProducts from '@/components/products'
import CFixedCart from '@/components/fixed-cart'
import CNewUserCoupon from '@/components/new-user-coupon'
import categoriesMixin from '@/mixins/categories'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CNumberInput, CSwiper, CSearch, CProducts, CFixedCart, CNewUserCoupon },
  mixins: [categoriesMixin, productsMixin, cartProductsMxins],
  data () {
    return {
      hotProductsList: {
        items: [],
        total: 0
      },
      cNewUserCoupon: {
        visible: false,
        list: {
          items: [],
          total: 0
        }
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
    this.cNewUserCoupon.list = await this.getCouponActivities()

    if (this.cNewUserCoupon.list.items[0] && this.cNewUserCoupon.list.items[0].sendTime === 'AFTER_REGISTER' && !this.$wx.getStorageSync('knowNewUserCoupon') && !this.$auth.phoneNumberBound()) {
      this.cNewUserCoupon.visible = true
    } else {
      this.cNewUserCoupon.visible = false
    }

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
    getCouponActivities () {
      return this.$store.dispatch('public/couponActivities/getList', {
        query: {
          where: {
            type: 'NEW_USER'
          }
        }
      })
    },
    goCategories (id) {
      this.$store.dispatch('public/categories/setId', { id })
      this.$wx.switchTab({ url: '/pages/tab-bar/categories/index' })
    },
    knowNewUserCoupon () {
      this.cNewUserCoupon.visible = false
      this.$wx.setStorageSync('knowNewUserCoupon', 1)
    }
  }
}

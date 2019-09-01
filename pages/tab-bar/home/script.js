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
import OrdersModel from '@/models/wx/orders'
import { debounce } from 'debounce'

export default {
  components: { CNumberInput, CSwiper, CSearch, CProducts, CFixedCart, CNewUserCoupon },
  mixins: [categoriesMixin, productsMixin, cartProductsMxins],
  data () {
    return {
      cFixedCart: {
        hidden: false
      },
      hotProductsList: {
        items: [],
        total: 0
      },
      myProductsList: {
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
      return this.adsList.items.map(item => ({
        image: this.$helpers.getImageURL({ id: item.picture, width: 750, height: 300 }),
        url: item.link
      }))
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

    if (this.$auth.loggedIn()) {
      this.myProductsList = await this.getMyProductsList()
    }

    this.$store.dispatch('public/categories/setId', { id: 0 })
  },
  methods: {
    handleScroll: debounce(function (e) {
      const query = wx.createSelectorQuery()

      query.select('#scroll-view').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(res => {
        this.cFixedCart.hidden = e.detail.scrollTop + 10 > e.detail.scrollHeight - res[0].height
      })
    }, 100),
    getAdsList () {
      return this.$store.dispatch('public/ads/getList', {
        query: {}
      })
    },
    async getProductsList () {
      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: {
          where: { status: { $eq: 1 } },
          limit: 15
        }
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
    gotoCategories (id) {
      this.$store.dispatch('public/categories/setId', { id })
      this.$wx.switchTab({ url: '/pages/tab-bar/categories/index' })
    },
    knowNewUserCoupon () {
      this.cNewUserCoupon.visible = false
      this.$wx.setStorageSync('knowNewUserCoupon', 1)
    },
    async getMyProductsList () {
      const { data: { items: ordersListItems } } = await new OrdersModel().GET({
        query: {
          where: {
            wxUserId: {
              $eq: this.$auth.get()['user'].id
            }
          },
          offset: 0,
          limit: 1000,
          order: JSON.stringify([['updatedAt', 'DESC']])
        }
      })

      let productIds = []

      ordersListItems.forEach(order => {
        order.products.forEach(product => {
          productIds.push(product.id)
        })
      })

      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: {
          where: {
            status: { $eq: 1 },
            id: { $in: [...new Set(productIds)] }
          },
          limit: 15
        }
      })

      return {
        items: items.map(item => this.addCartKeys(item)),
        total
      }
    }
  }
}

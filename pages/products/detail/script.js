import CProductActions from '@/components/product-actions'
import CSpecifications from '@/components/specifications'
import CFixedCart from '@/components/fixed-cart'
import cartProductsMxins from '@/mixins/cart-products'
import CAddToCart from '@/components/add-to-cart'
import { debounce } from 'debounce'

export default {
  components: { CProductActions, CSpecifications, CAddToCart, CFixedCart },
  mixins: [cartProductsMxins],
  data () {
    return {
      cSpecifications: {
        current: -1
      },
      detail: {},
      cFixedCart: {
        hidden: false
      }
    }
  },
  async onShow () {
    this.id = this.$mp.query.id

    this.detail = this.addCartKeys(await this.getDetail())

    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
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
    getDetail () {
      return this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })
    },
    changeSpecification (e) {
      this.cSpecifications.current = +e.detail.value
    }
  }
}

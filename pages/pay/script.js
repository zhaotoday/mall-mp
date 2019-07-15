import { mapState } from 'vuex'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  mixins: [productsMixin, cartProductsMxins],
  computed: {
    ...mapState({
      ordersForm: state => state['wx/orders'].form
    }),
    finalTotalPrice () {
      return parseFloat((this.totalPrice - (this.ordersForm.coupon.value || 0).toFixed(2)).toFixed(2))
    }
  },
  data () {
    return {
      cPayWay: {
        index: 0,
        range: this.$consts.PAY_WAYS.map(item => item.label)
      }
    }
  },
  async onShow () {
    await this.loggedIn()
    await this.phoneNumberBound()
  },
  onUnload () {
    this.$store.dispatch('wx/orders/setForm', {
      key: 'address',
      value: {}
    })
    this.$store.dispatch('wx/orders/setForm', {
      key: 'coupon',
      value: {}
    })
    this.$store.dispatch('wx/orders/setForm', {
      key: 'remark',
      value: {
        value: ''
      }
    })
  },
  methods: {
    handlePayWayChange (e) {
      this.cPayWay.index = e.detail.value
    },
    async pay () {
      const { address, remark, coupon } = this.ordersForm

      if (!address.id) {
        this.$wx.showToast({
          title: '请选择收货地址'
        })
        return
      }

      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          addressId: address.id,
          couponId: coupon.id,
          deliveryId: 0,
          remark: remark.value,
          paidMoney: this.finalTotalPrice,
          products: this.cartProducts
        }
      })

      try {
        await this.$wx.requestPayment(data)
        this.$wx.redirectTo({
          url: `/pages/orders/index`
        })
      } catch (e) {
        this.$wx.redirectTo({
          url: '/pages/orders/index?status=1'
        })
      }

      await this.$helpers.sleep(200)

      this.$store.dispatch('public/cartProducts/setItems', {
        items: []
      })
    }
  }
}

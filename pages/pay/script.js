import { mapState } from 'vuex'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'
import map from '@/utils/map'

export default {
  mixins: [productsMixin, cartProductsMxins],
  computed: {
    ...mapState({
      ordersForm: state => state['wx/orders'].form
    }),
    finalTotalPrice () {
      const totalPrice = parseFloat((this.totalPrice - (this.ordersForm.coupon.value || 0).toFixed(2)).toFixed(2))
      return totalPrice > 0 ? totalPrice : 1
    },
    couponQueryString () {
      return '?select=1'
        + `&price=${this.finalTotalPrice}`
        + `&productIds=${this.cartProducts.map(item => item.id).join(',')}`
        + `&categoryIds=${this.cartProducts.map(item => item.categoryId).join(',')}`
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
      this.cPayWay.index = +e.detail.value
    },
    async pay (e) {
      const { address, remark, coupon } = this.ordersForm

      if (!address.id) {
        this.$wx.showToast({
          title: '请选择收货地址'
        })
        return
      }

      const { city, district, town } = await map.getAddress({ location: address.location })
      const { DELIVERY_AREAS } = this.$consts

      if (!(city === DELIVERY_AREAS.city && district === DELIVERY_AREAS.district && DELIVERY_AREAS.towns.includes(town))) {
        this.$wx.showToast({
          title: '该地址不在配送范围内'
        })
        return
      }

      if (this.cPayWay.index === 1 && this.finalTotalPrice > this.$consts.ORDER_MAX_PRICE) {
        this.$wx.showToast({
          title: `货到付款订单金额不能高于 ${this.$consts.ORDER_MAX_PRICE} 元`
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
          payWay: this.$consts.PAY_WAYS[this.cPayWay.index].value,
          paidMoney: this.finalTotalPrice,
          products: this.cartProducts,
          formId: e.detail.formId || ''
        }
      })

      try {
        if (e.detail.formId) {
          this.$wx.showToast({
            title: '下单成功'
          })
          await this.$helpers.sleep(1500)
        } else {
          await this.$wx.requestPayment(data)
        }
        this.$wx.redirectTo({
          url: `/pages/orders/index?status=2`
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

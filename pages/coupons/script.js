import CEmpty from '@/components/empty'
import CCoupon from '@/components/coupon'
import { mapState } from 'vuex'

export default {
  components: { CEmpty, CCoupon },
  data () {
    return {
      query: {
        select: ''
      },
      cTabs: {
        current: 0
      }
    }
  },
  computed: mapState({
    list: state => state['wx/wxUserCoupons'].list
  }),
  onShow () {
    this.query.select = this.$mp.query.select

    if (this.$mp.query.select) {
      this.$wx.setNavigationBarTitle({
        title: '选择优惠券'
      })
      this.cTabs.current = 1
      this.getList({ status: '0' })
    } else {
      this.$wx.setNavigationBarTitle({
        title: '我的优惠券'
      })
      this.getList()
    }

    this.loaded = true
  },
  methods: {
    getList ({ status = '' } = {}) {
      return this.$store.dispatch('wx/wxUserCoupons/getList', {
        query: {
          where: {
            wxUserId: {
              $eq: this.$auth.get()['user'].id
            },
            used: {
              $eq: status
            }
          },
          minPrice: this.$mp.query.price || 0,
          productIds: this.$mp.query.productIds || '',
          categoryIds: this.$mp.query.categoryIds || ''
        }
      })
    },
    changeTab (index, value) {
      this.cTabs.current = index
      this.getList({ status: value })
    },
    select (item) {
      if (this.$mp.query.select) {
        this.$store.dispatch('wx/orders/setForm', {
          key: 'coupon',
          value: item
        })
        this.$wx.navigateBack()
      }
    }
  }
}

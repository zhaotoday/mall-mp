import CEmpty from '@/components/empty'
import CCoupon from '@/components/coupon'
import { mapState } from 'vuex'

export default {
  components: { CEmpty, CCoupon },
  data () {
    return {
      cTabs: {
        current: 0
      }
    }
  },
  computed: mapState({
    list: state => state['wx/wxUserCoupons'].list
  }),
  onShow () {
    this.getList()
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
          minPrice: this.$mp.query.price || 0
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

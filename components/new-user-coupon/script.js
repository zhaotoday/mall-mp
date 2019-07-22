import CCoupon from '@/components/coupon'
import { mapState } from 'vuex'

export default {
  name: 'c-new-user-coupon',
  components: { CCoupon },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: mapState({
    list: state => state['public/coupons'].list
  }),
  created () {
    this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('public/coupons/getList', {
        query: {
          where: {
            type: 'NEW_USER'
          }
        }
      })
    }
  }
}

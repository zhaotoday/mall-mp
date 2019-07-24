import CCoupon from '@/components/coupon'
import { mapState } from 'vuex'

export default {
  name: 'c-new-user-coupon',
  components: { CCoupon },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    items: {}
  }
}

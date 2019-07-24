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
  data () {
    return {
      list: {}
    }
  },
  async created () {
    this.list = await this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('public/couponActivities/getList', {
        query: {
          where: {
            type: 'NEW_USER'
          }
        }
      })
    }
  }
}

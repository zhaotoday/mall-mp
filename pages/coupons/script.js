import CEmpty from '@/components/empty'
import CCoupon from '@/components/coupon'

export default {
  components: { CEmpty, CCoupon },
  data () {
    return {
      cTabs: {
        current: 0
      }
    }
  },
  methods: {
    changeTab (index) {
      this.cTabs.current = index
    }
  }
}

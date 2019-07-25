import time from 'jt-time'

export default {
  name: 'c-coupon',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    used: {
      type: Number,
      default: 0
    },
    isNewUser: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Number,
      default: time.getTime()
    }
  }
}

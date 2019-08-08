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
      type: String,
      default: time.getTime()
    }
  },
  methods: {
    getTime (time) {
      return time ? new Date(time).getTime() : new Date().getTime()
    }
  }
}

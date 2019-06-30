export default {
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

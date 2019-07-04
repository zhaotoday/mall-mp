import CEmpty from '@/components/empty'

export default {
  components: { CEmpty },
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

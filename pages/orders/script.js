import { mapState } from 'vuex'

export default {
  data () {
    return {
      cTabs: {
        current: 0
      }
    }
  },
  computed: mapState({
    list: state => state['wx/orders'].list
  }),
  onShow () {
    this.getList()
  },
  methods: {
    changeTab (index) {
      this.cTabs.current = index
    },
    getList () {
      return this.$store.dispatch('wx/orders/getList', {
        query: {
          offset: 0,
          limit: 1000
        }
      })
    }
  }
}

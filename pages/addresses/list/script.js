import { mapState } from 'vuex'

export default {
  computed: mapState({
    list: state => state['wx/addresses'].list
  }),
  onShow () {
    this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/addresses/getList', {
        query: {}
      })
    },
    setDefault (item) {
      console.log(item)
    },
    del (item) {
      console.log(item)
    }
  }
}

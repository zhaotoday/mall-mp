import CSearch from '@/components/search'
import CSort from '@/components/sort'

export default {
  components: { CSearch, CSort },
  data () {
    return {
      keywords: ''
    }
  },
  onShow () {
    this.keywords = this.$mp.query.keywords
    console.log(this.keywords)
  },
  methods: {
    search () {
      const value = this.$refs.search.getValue().trim()

      console.log(value)
    },
    handleSortChange (item) {
      console.log(item)
    }
  }
}

import CSearch from '@/components/search'

const SEARCH_HISTORY = 'searchHistory'

export default {
  components: {
    CSearch
  },
  data () {
    return {
      keywords: ''
    }
  },
  onShow () {
    this.keywords = this.$mp.query.keywords
  },
  methods: {
    search () {
      const value = this.$refs.search.getValue().trim()

      console.log(value)
    },
    clearHistory () {
      this.$wx.removeStorageSync(SEARCH_HISTORY)
    }
  }
}

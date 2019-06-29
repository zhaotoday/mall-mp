import CSearch from '@/components/search'

const SEARCH_HISTORY = 'searchHistory'

export default {
  components: {
    CSearch
  },
  methods: {
    search () {
      const value = this.$refs.search.getValue().trim()

      this.$wx.navigateTo({
        url: `/pages/products/list/index?keywords=${value}`
      })
    },
    clearHistory () {
      this.$wx.removeStorageSync(SEARCH_HISTORY)
    }
  }
}

import CSearch from '@/components/search'

const SEARCH_HISTORY = 'searchHistory'

export default {
  components: {
    CSearch
  },
  data () {
    return {
      history: [],
      hotKeywords: ['花生油', '大米', '食盐', '白菜']
    }
  },
  onShow () {
    this.history = this.getHistory()
  },
  methods: {
    search (keywords) {
      keywords = keywords || this.$refs.search.getValue().trim()

      this.saveHistory(keywords)

      this.$wx.navigateTo({
        url: `/pages/products/list/index?keywords=${keywords}`
      })
    },
    getHistory () {
      return this.$wx.getStorageSync(SEARCH_HISTORY) || []
    },
    saveHistory (keywords) {
      const searchHistory = this.$wx.getStorageSync(SEARCH_HISTORY) || []

      if (!searchHistory.includes(keywords)) {
        this.$wx.setStorageSync(SEARCH_HISTORY, [...searchHistory, keywords])
      }
    },
    clearHistory () {
      this.$wx.removeStorageSync(SEARCH_HISTORY)
      this.history = []
    }
  }
}

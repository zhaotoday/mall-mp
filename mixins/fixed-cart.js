import { debounce } from 'debounce'

export default {
  data () {
    return {
      cFixedCart: {
        hidden: false
      }
    }
  },
  methods: {
    handleScroll: debounce(function (e) {
      const query = wx.createSelectorQuery()

      query.select('#scroll-view').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(res => {
        this.cFixedCart.hidden = e.detail.scrollTop + 50 > e.detail.scrollHeight - res[0].height
      })
    }, 10)
  }
}

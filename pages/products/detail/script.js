import { mapState } from 'vuex'
import CProductActions from '../../../components/product-actions/index'
import WxParse from 'mpvue-wxparse'

export default {
  components: {CProductActions, WxParse},
  computed: mapState({
    detail: state => state['public/products'].detail
  }),
  async onShow () {
    this.id = this.$mp.query.id || 17

    await this.getDetail()
    await this.$wx.setNavigationBarTitle({title: this.detail.name})
  },
  methods: {
    async getDetail () {
      const {data} = await this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })

      console.log(data)

    }
  }
}

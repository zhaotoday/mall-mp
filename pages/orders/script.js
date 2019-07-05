import { mapState } from 'vuex'
import productsMixin from '@/mixins/products'
import CEmpty from '@/components/empty'

export default {
  mixins: [productsMixin],
  components: { CEmpty },
  data () {
    return {
      status: '',
      cTabs: {
        current: 0
      }
    }
  },
  computed: mapState({
    list: state => state['wx/orders'].list
  }),
  async onShow () {
    await this.getList()
    this.loaded = true
  },
  methods: {
    changeTab (item, index) {
      this.status = item.code
      this.cTabs.current = index
      this.getList()
    },
    getList () {
      return this.$store.dispatch('wx/orders/getList', {
        query: {
          where: {
            status: {
              $eq: this.status
            }
          },
          offset: 0,
          limit: 1000
        }
      })
    }
  }
}

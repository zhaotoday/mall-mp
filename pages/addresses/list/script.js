import { mapState } from 'vuex'
import CDialog from '@/components/dialog'

export default {
  components: { CDialog },
  data () {
    return {
      cDel: {
        visible: false,
        id: 0
      }
    }
  },
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
    showDel (item) {
      this.cDel.id = item.id
      this.cDel.visible = true
    },
    async confirmDel () {
      this.cDel.visible = false
      await this.$store.dispatch('wx/addresses/del', {
        id: this.cDel.id
      })
      this.$wx.showToast({
        title: '删除成功'
      })
      this.getList()
    }
  }
}

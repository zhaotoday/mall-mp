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
    this.$wx.setNavigationBarTitle({
      title: '收获地址'
    })

    this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/addresses/getList', {
        query: {}
      })
    },
    async setDefault (item) {
      await this.$store.dispatch('wx/addresses/postAction', {
        showLoading: true,
        body: {
          type: 'SET_DEFAULT',
          id: item.id
        }
      })

      this.$wx.showToast({
        title: '设置成功'
      })

      this.getList()
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

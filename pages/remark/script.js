import { mapState } from 'vuex'

export default {
  data () {
    return {
      cForm: {
        remark: ''
      }
    }
  },
  computed: mapState({
    ordersForm: state => state['wx/orders'].form
  }),
  onShow () {
    this.cForm.remark = this.ordersForm.remark.value
  },
  methods: {
    submit () {
      this.$store.dispatch('wx/orders/setForm', {
        key: 'remark',
        value: {
          value: this.cForm.remark
        }
      })
      this.$wx.navigateBack()
    }
  }
}

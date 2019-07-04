export default {
  data () {
    return {
      cForm: {
        remark: ''
      }
    }
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

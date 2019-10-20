export default {
  data () {
    return {
      cForm: {
        city: '',
        name: '',
        suggestion: ''
      }
    }
  },
  methods: {
    async submit () {
      const { city, name, suggestion } = this.cForm

      if (!city) {
        this.$wx.showToast({ title: '请输入所在城市' })
        return
      }

      if (!name) {
        this.$wx.showToast({ title: '请输入您的姓名' })
        return
      }

      await this.$store.dispatch('wx/joins/post', {
        body: this.cForm
      })

      this.$wx.showToast({ title: '提交成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}


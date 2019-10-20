export default {
  data () {
    return {
      cForm: {
        name: '',
        contactName: '',
        remark: ''
      }
    }
  },
  methods: {
    async submit () {
      const { name, contactName, phoneNumber } = this.cForm

      if (!name) {
        this.$wx.showToast({ title: '请输入商家名称' })
        return
      }

      if (!contactName) {
        this.$wx.showToast({ title: '请输入联系人' })
        return
      }

      if (!phoneNumber) {
        this.$wx.showToast({ title: '请输入手机号' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      await this.$store.dispatch('wx/merchants/post', {
        body: this.cForm
      })

      this.$wx.showToast({ title: '提交成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}


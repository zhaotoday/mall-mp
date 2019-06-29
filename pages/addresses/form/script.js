export default {
  data () {
    return {
      cForm: {
        name: '',
        gender: '1',
        phoneNumber: '',
        address: '',
        room: '',
        tag: '1'
      }
    }
  },
  async onShow () {
    this.id = this.$mp.query.id

    if (this.id) {
      this.$wx.setNavigationBarTitle({
        title: '修改地址'
      })
      this.cForm = await this.getDetail()
      console.log(this.cForm, 33)
    } else {
      this.$wx.setNavigationBarTitle({
        title: '新增地址'
      })
    }
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('wx/addresses/getDetail', {
        id: this.id
      })
    },
    changeTag (key, item) {
      this.cForm[key] = item.value
    },
    async save () {
      const PHONE_REG = /^1\d{2}\s?\d{4}\s?\d{4}$/
      const { name, phoneNumber, address } = this.cForm

      if (!name.trim()) {
        this.$wx.showToast({ title: '请填写收货人' })
        return
      }

      if (!phoneNumber.trim()) {
        this.$wx.showToast({ title: '请填写手机号' })
        return
      }

      if (!PHONE_REG.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      if (!address.trim()) {
        this.$wx.showToast({ title: '请填写小区' })
        return
      }

      await this.$store.dispatch('wx/addresses/post', {
        showLoading: true,
        body: this.cForm
      })

      this.$wx.showToast({ title: '新增成功' })
    }
  }
}
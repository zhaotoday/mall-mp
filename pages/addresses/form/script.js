import { mapState } from 'vuex'

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
  computed: mapState({
    addressesForm: state => state['wx/addresses'].form
  }),
  async onShow () {
    this.id = this.$mp.query.id

    if (this.id) {
      this.$wx.setNavigationBarTitle({
        title: '修改收获地址'
      })

      this.cForm = await this.getDetail()
    } else {
      this.$wx.setNavigationBarTitle({
        title: '新增收获地址'
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

      await this.$store.dispatch(`wx/addresses/${this.id ? 'put' : 'post'}`, {
        showLoading: true,
        id: this.id,
        body: this.cForm
      })

      this.$wx.showToast({
        title: this.id ? '修改成功' : '新增成功'
      })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}

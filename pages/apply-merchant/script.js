import restHelpers from '@/utils/helpers/rest-helpers'

export default {
  data () {
    return {
      cForm: {
        name: '',
        picture: '',
        contactName: '',
        phoneNumber: '',
        address: '',
        deliveryTime: '',
        staffNo: ''
      }
    }
  },
  methods: {
    async chooseImage () {
      const { tempFilePaths } = await this.$wx.chooseImage({
        count: 1,
        sizeType: ['compressed']
      })

      const { data } = await this.$wx.uploadFile({
        url: this.$consts.API_URL + '/wx/files',
        header: restHelpers.getHeaders(),
        filePath: tempFilePaths[0],
        name: 'file'
      })

      this.cForm.picture = JSON.parse(data)['data'].id
    },
    delImage () {
      this.cForm.picture = 0
    },
    async submit () {
      const { name, picture, contactName, phoneNumber, address, deliveryTime } = this.cForm

      if (!name) {
        this.$wx.showToast({ title: '请输入商家名称' })
        return
      }

      if (!picture) {
        this.$wx.showToast({ title: '请上传店铺照片' })
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

      if (!address) {
        this.$wx.showToast({ title: '请输入收货地址' })
        return
      }

      if (!deliveryTime) {
        this.$wx.showToast({ title: '请输入送货时间' })
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


export default {
  name: 'c-add-to-cart',
  props: {
    detail: {
      type: Object,
      default: () => ({})
    },
    specificationIndex: {
      type: Number,
      default: -1
    },
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleAdd () {
      console.log(this.detail.specifications, this.specificationIndex, 33)
      if (this.detail.specifications.length && this.specificationIndex === -1) {
        this.$wx.showToast({
          title: '请选择规格'
        })
        return
      }

      console.log(1)

      this.$emit('add')
      console.log(2)
    }
  }
}

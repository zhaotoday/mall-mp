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
      if (this.detail.specifications[0] && this.specificationIndex === -1) {
        this.$wx.showToast({
          title: '请选择规格'
        })
        return
      }

      this.$emit('add')
    }
  }
}

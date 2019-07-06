export default {
  methods: {
    getPriceRange (product) {
      const { specifications, unit } = product

      if (specifications.length) {
        const unitPrices = specifications
          .map(item => parseFloat((item.price / parseInt(item.value.split(':')[1], 10)).toFixed(2)))
          .sort((a, b) => a - b)
        const unitLabel = this.$helpers.getItem(this.$consts.PRODUCT_UNITS, 'value', unit)['label']

        return `${unitPrices[0]} - ${unitPrices.pop()} / ${unitLabel}`
      } else {
        return ''
      }
    },
    getUnitPrice (specification, unit) {
      const { value, price } = specification
      const number = parseInt(value.split(':')[1], 10)
      const unitLabel = this.$helpers.getItem(this.$consts.PRODUCT_UNITS, 'value', unit)['label']

      return `${parseFloat((price / number).toFixed(2))} 元 / ${unitLabel}`
    },
    toggleSpecification (items, item, editable) {
      if (editable) {
        this.$store.dispatch('public/cartProducts/toggleSpecification', { item })
      } else {
        items.find(product => product.id === item.id)['visible'] = !item.visible
      }
    },
    getTotalNumber (products) {
      let ret = 0

      products.forEach(product => {
        if (product.price) {
          ret += product.number
        } else {
          product.specifications.forEach(specification => {
            ret += specification.number
          })
        }
      })

      return ret
    }
  }
}

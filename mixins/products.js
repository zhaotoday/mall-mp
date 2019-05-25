export default {
  data () {
    return {
      cart: []
    }
  },
  methods: {
    getPriceRange (product) {
      const { specifications, unit } = product

      if (specifications.length) {
        const unitPrices = specifications
          .map(item => parseFloat((item.price / parseInt(item.value.split(':')[1], 10)).toFixed(2)))
          .sort((a, b) => a - b)
        const unitLabel = this.$helpers.getItem(this.$consts.PRODUCT_UNITS, 'value', unit)['label']

        return `${unitPrices[0]} - ${unitPrices.pop()}/${unitLabel}`
      } else {
        return ''
      }
    },
    getUnitPrice (specification, unit) {
      const { value, price } = specification
      const number = parseInt(value.split(':')[1], 10)
      const unitLabel = this.$helpers.getItem(this.$consts.PRODUCT_UNITS, 'value', unit)['label']

      return `${price / number} 元/${unitLabel}`
    },
    async getCart () {
      const { items } = await this.$store.dispatch('wx/carts/getList', {
        query: {
          where: {
            wxUserId: {
              $eq: this.$auth.get()['user'].id
            }
          }
        }
      })

      return items[0] ? items[0].data : {}
    },
    async updateCart () {
      return this.$store.dispatch('wx/carts/postAction', {
        body: {
          type: 'UPDATE',
          data: this.productsList.items
        }
      })
    },
    handleToggleSpecification (item) {
      this.productsList.items.find(product => product.id === item.id)['visible'] = !item.visible
    },
    async handleAddNumber (item) {
      if (item.number < 99) {
        this.productsList.items.find(product => product.id === item.id)['number'] += 1
        this.updateCart()
      }
    },
    async handleSubtractNumber (item) {
      if (item.number > 0) {
        this.productsList.items.find(product => product.id === item.id)['number'] -= 1
        this.updateCart()
      }
    }
  }
}

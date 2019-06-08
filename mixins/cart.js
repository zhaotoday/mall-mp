export default {
  data () {
    return {
      cart: []
    }
  },
  methods: {
    async getCart () {
      const { data } = await this.$store.dispatch('wx/carts/postAction', {
        body: { type: 'GET' }
      })

      return data ? data.data : []
    },
    getCartData () {
      return this.productsList.items.filter(item => {
        return item.price
          ? !!item.number
          : !!item.specifications.find(specification => !!specification.number)
      }).map(item => {
        return {
          ...item,
          specifications: item.specifications.filter(item => !!item.number),
          checked: true
        }
      })
    },
    async updateCart () {
      await this.$store.dispatch('wx/carts/postAction', {
        body: {
          type: 'UPDATE',
          data: this.getCartData()
        }
      })
    },
    handleToggleSpecification (item) {
      this.productsList.items.find(product => product.id === item.id)['visible'] = !item.visible
    },
    async handleAddNumber (item, specification) {
      if (specification) {
        if (specification.number < 99) {
          this.productsList.items
            .find(product => product.id === item.id)['specifications']
            .find(item => item.value === specification.value)['number'] += 1
          this.cart = this.getCartData()
          this.updateCart()
        }
      } else {
        if (item.number < 99) {
          this.productsList.items
            .find(product => product.id === item.id)['number'] += 1
          this.cart = this.getCartData()
          this.updateCart()
        }
      }
    },
    async handleSubtractNumber (item, specification) {
      if (specification) {
        if (specification.number > 0) {
          this.productsList.items
            .find(product => product.id === item.id)['specifications']
            .find(item => item.value === specification.value)['number'] -= 1
          this.cart = this.getCartData()
          this.updateCart()
        }
      } else {
        if (item.number > 0) {
          this.productsList.items
            .find(product => product.id === item.id)['number'] -= 1
          this.cart = this.getCartData()
          this.updateCart()
        }
      }
    },
    handleCheckboxChange (item) {
      this.cart.find(product => product.id === item.id)['checked'] = !item.checked
    }
  }
}

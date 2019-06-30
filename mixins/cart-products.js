const CART_PRODUCTS = 'cartProducts'

export default {
  data () {
    return {
      cartProducts: []
    }
  },
  methods: {
    getNumber (item, specification) {
      const cartProduct = this.cartProducts.find(product => product.id === item.id)

      if (cartProduct) {
        if (specification) {
          return cartProduct.specifications.find(item => item.value === specification.value)['number']
        } else {
          return cartProduct.number
        }
      } else {
        return 0
      }
    },
    getCartProducts () {
      return this.$wx.getStorageSync(CART_PRODUCTS) || []
    },
    setCartProducts (value) {
      this.$wx.setStorageSync(CART_PRODUCTS, value)
    },
    async addNumber (item, specification) {
      if (!this.cartProducts.find(product => product.id === item.id)) {
        this.cartProducts.push(item)
      }

      if (specification) {
        if (specification.number < 99) {
          this.cartProducts
            .find(product => product.id === item.id)['specifications']
            .find(item => item.value === specification.value)['number'] += 1
        }
      } else {
        if (item.number < 99) {
          this.cartProducts
            .find(product => product.id === item.id)['number'] += 1
        }
      }

      this.setCartProducts(this.cartProducts)
    },
    async subtractNumber (item, specification) {
      if (!this.cartProducts.find(product => product.id === item.id)) {
        this.cartProducts.push(item)
      }

      if (specification) {
        if (specification.number > 0) {
          this.cartProducts
            .find(product => product.id === item.id)['specifications']
            .find(item => item.value === specification.value)['number'] -= 1
        }
      } else {
        if (item.number > 0) {
          this.cartProducts
            .find(product => product.id === item.id)['number'] -= 1
        }
      }

      this.setCartProducts(this.cartProducts)
    },
    handleCheckboxChange (item) {
      this.cartProducts.find(product => product.id === item.id)['checked'] = !item.checked
    }
  }
}

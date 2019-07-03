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
    addCartKeys (item) {
      const cartProduct = this.cartProducts.find(product => product.id === item.id)

      return item.id ? {
        ...item,
        visible: cartProduct
          ? !!(cartProduct.specifications.find(cartSpecification => !!cartSpecification.number))
          : false,
        checked: true,
        number: cartProduct ? cartProduct.number : 0,
        specifications: item.specifications
          ? item.specifications.map(specification => {
            const cartSpecification = cartProduct
              ? cartProduct.specifications.find(cartSpecification => cartSpecification.value === specification.value)
              : null

            return {
              ...specification,
              number: cartSpecification ? cartSpecification.number : 0
            }
          })
          : []
      } : {}
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
            .find(product => product.id === item.id)['visible'] = true
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

      this.cartProducts = this.cartProducts.filter(product => product.number || product.specifications.find(specification => specification.number))

      this.setCartProducts(this.cartProducts)
    },
    handleCheckboxChange (item) {
      this.cartProducts.find(product => product.id === item.id)['checked'] = !item.checked
    },
    handleCartManagerCheck (all) {
      this.cartProducts = this.cartProducts.map(item => ({ ...item, checked: all }))
    }
  }
}

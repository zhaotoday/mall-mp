<template>
  <div class="c-cart-manager c1">
    <div class="c-cart-manager__checked bgc11 fs28">
      <c-checkbox
        class="c-cart-manager__checkbox"
        :checked="!cart.find(item => !item.checked)"
        @change="handleCheckboxChange">
      </c-checkbox>
      <div class="fs28">已选中（{{ checkedProducts.length }}）</div>
      <div class="c-cart-manager__money fs32">￥{{ totalPrice }} 元</div>
    </div>
    <div class="c-cart-manager__settle bgc5 fs32 u-tac">去结算</div>
  </div>
</template>

<script>
import CCheckbox from '../checkbox/index'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    checkedProducts () {
      return this.cart.filter(item => item.checked)
    },
    totalPrice () {
      let totalPrice = 0

      this.checkedProducts.forEach(product => {
        if (product.price) {
          totalPrice += product.price * product.number
        } else {
          product.specifications.forEach(specification => {
            totalPrice += specification.price * specification.number
          })
        }
      })

      return totalPrice
    }
  },
  methods: {
    handleCheckboxChange () {
      if (this.cart.find(item => !item.checked)) {
        this.$emit('check', true)
      } else {
        this.$emit('check', false)
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

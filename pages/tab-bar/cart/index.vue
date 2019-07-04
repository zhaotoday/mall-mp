<template>
  <div class="p-cart">
    <div class="bgc1 u-mt20">
      <c-products
        ref="products"
        editable>
      </c-products>
    </div>
    <c-cart-manager
      :cart-products="cartProducts"
      @check="handleCartManagerCheck">
    </c-cart-manager>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

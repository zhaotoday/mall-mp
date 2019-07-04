<template>
  <div class="p-cart">
    <div
      v-if="cartProducts.length"
      class="u-mt20">
      <c-products
        :items="cartProducts"
        editable>
      </c-products>
    </div>
    <c-empty v-else></c-empty>
    <c-cart-manager
      v-if="cartProducts.length"
      :cart-products="cartProducts">
    </c-cart-manager>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

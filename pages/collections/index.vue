<template>
  <div>
    <scroll-view
      id="scroll-view"
      class="p-collections u-pt20"
      scroll-y
      @scroll="handleScroll">
      <c-products
        ref="products"
        :items="productsList.items">
      </c-products>
      <c-empty v-if="loaded && !productsList.items.length"></c-empty>
    </scroll-view>
    <div :hidden="cFixedCart.hidden">
      <c-fixed-cart has-tab></c-fixed-cart>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

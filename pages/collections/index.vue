<template>
  <div class="c-collections u-pt20">
    <c-products
      ref="products"
      :items="productsList.items">
    </c-products>
    <c-empty v-if="loaded && !productsList.items.length"></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

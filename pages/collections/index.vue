<template>
  <div class="c-collections u-pt20">
    <c-products
      v-if="productsList.items.length"
      ref="products"
      :items="productsList.items">
    </c-products>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

<template>
  <div class="p-products-list">
    <div class="p-head">
      <c-search
        ref="search"
        show-submit
        :default-value="keywords"
        @confirm="search">
      </c-search>
      <c-sort
        :items="$consts.PRODUCT_SORT_ITEMS"
        @change="handleSortChange">
      </c-sort>
    </div>
    <scroll-view
      id="scroll-view"
      class="b-products"
      scroll-y
      @scroll="handleScroll">
      <c-products
        ref="products"
        :items="productsList.items">
      </c-products>
      <c-empty v-if="!productsList.items.length && loaded"></c-empty>
    </scroll-view>
    <div :hidden="cFixedCart.hidden">
      <c-fixed-cart has-tab></c-fixed-cart>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./styles.scss">
</style>

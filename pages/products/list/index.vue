<template>
  <div class="p-products-list">
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
    <scroll-view
      class="b-products"
      scroll-y>
      <c-products
        ref="products"
        :items="productsList.items">
      </c-products>
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./styles.scss">
</style>

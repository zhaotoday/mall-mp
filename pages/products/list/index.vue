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
        v-if="productsList.items.length"
        ref="products"
        :items="productsList.items">
      </c-products>
      <div
        v-else-if="loaded"
        class="c-empty u-tac">
        <i class="c-icon c-icon--empty"></i>
        <p class="c-empty__tip c8 fs28">空空如也...</p>
      </div>
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./styles.scss">
</style>

<template>
  <div class="c-cart-manager c1">
    <div class="c-cart-manager__checked bgc11 fs28">
      <c-checkbox
        class="c-cart-manager__checkbox"
        :checked="!cartProducts.find(item => !item.checked)"
        @change="$store.dispatch('public/cartProducts/checkAllItems')">
      </c-checkbox>
      <div class="fs28">已选中（{{ checkedProducts.length }}）</div>
      <div class="c-cart-manager__money fs32">￥{{ totalPrice }} 元</div>
    </div>
    <div
      class="c-cart-manager__settle bgc5 fs32 u-tac"
      @click="handleGoToPay">
      去结算
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

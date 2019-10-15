<template>
  <div class="p-cart">
    <div
      class="u-mt20">
      <c-products
        :items="cartProducts"
        editable>
      </c-products>
    </div>
    <c-empty v-if="!cartProducts.length"></c-empty>
    <c-cart-manager
      v-if="cartProducts.length"
      :cart-products="cartProducts">
    </c-cart-manager>
    <c-dialog
      :visible="cPriceConfirm.visible"
      title="请确认"
      content="购物车商品价格有更新！"
      @cancel="cPriceConfirm.visible = false"
      @confirm="cPriceConfirm.visible = false">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

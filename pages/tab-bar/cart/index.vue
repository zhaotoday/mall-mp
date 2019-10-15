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
      :visible="cDel.visible"
      title="请确认"
      content="确认删除收货地址？"
      @cancel="cDel.visible = false"
      @confirm="confirmDel">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

<template>
  <div
    class="c-fixed-cart bgc5 c1 fs28"
    @click="navigateTo('/pages/cart/index')">
    <div class="c-fixed-cart__number bgc17">1</div>
    ￥{{ totalPrice }}
  </div>
</template>

<script src="./script.js"></script>

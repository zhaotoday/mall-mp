<template>
  <div
    :class="[ 'c-fixed-cart bgc5 c1 fs28', { 'has-tab': hasTab } ]"
    @click="switchTab('/pages/tab-bar/cart/index')">
    <div class="c-fixed-cart__number bgc17 fs20">{{ checkedCartProducts.length }}</div>
    ￥{{ totalPrice }}
  </div>
</template>

<script src="./script.js"></script>

<template>
  <div class="c-product-actions">
    <div
      :class="[ 'c-product-actions__collect bgc1', { 'is-active': collected } ]"
      @click="collect">
    </div>
    <div class="c-product-actions__add-cart">
      <slot name="add-cart"></slot>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

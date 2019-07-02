<template>
  <div class="c-product-actions">
    <div
      :class="[ 'c-product-actions__collect bgc1', { 'is-active': collected } ]"
      @click="collect">
    </div>
    <div class="c-product-actions__add-cart">
      <c-add-to-cart
        v-if="specificationIndex === -1"
        :number="getNumber(item)"
        @add="addNumber(item)"
        @add="subtractNumber(item)">
      </c-add-to-cart>
      <c-add-to-cart
        v-else
        :number="getNumber(item, item.specifications[specificationIndex].specification)"
        @add="addNumber(item, item.specifications[specificationIndex].specification)"
        @add="subtractNumber(item, item.specifications[specificationIndex].specification)">
      </c-add-to-cart>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

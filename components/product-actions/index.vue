<template>
  <div class="c-product-actions">
    <div
      :class="[ 'c-product-actions__collect bgc1', { 'is-active': collected } ]"
      @click="collect">
    </div>
    <div class="c-product-actions__add-cart">
      <c-add-to-cart
        v-if="specificationIndex === -1"
        :key="-1"
        :detail="detail"
        :specification-index="specificationIndex"
        :number="getNumber(detail)"
        @add="addNumber(detail)"
        @subtract="subtractNumber(detail)">
      </c-add-to-cart>
      <c-add-to-cart
        v-else
        :key="detail.specifications[specificationIndex].value"
        :detail="detail"
        :specification-index="specificationIndex"
        :number="getNumber(detail, detail.specifications[specificationIndex])"
        @add="addNumber(detail, detail.specifications[specificationIndex])"
        @subtract="subtractNumber(detail, detail.specifications[specificationIndex])">
      </c-add-to-cart>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

<template>
  <div
    v-if="!number"
    class="bgc4 c1 fs32 u-tac"
    @click="$emit('add')">
    加入购物车
  </div>
  <div
    v-else
    class="c-add-to-cart bgc4 c1 u-tac">
    <div
      class="c-add-to-cart__subtract fs46"
      @click.stop="$emit('subtract')">
      -
    </div>
    <div class="c-add-to-cart__number fs28 u-tac">
      {{ number }}
    </div>
    <div
      class="c-add-to-cart__add fs46"
      @click.stop="$emit('add')">
      +
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

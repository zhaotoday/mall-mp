<template>
  <div class="c-cart-manager c1">
    <div class="c-cart-manager__checked bgc11 fs28">
      <c-checkbox
        class="c-cart-manager__checkbox"
        :checked="true">
      </c-checkbox>
      <div class="fs28">已选中（2）</div>
      <div class="c-cart-manager__money fs32">￥23.68</div>
    </div>
    <div class="c-cart-manager__settle bgc5 fs32 u-tac">去结算</div>
  </div>
</template>

<script>
import CCheckbox from '../checkbox/index'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  props: {}
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

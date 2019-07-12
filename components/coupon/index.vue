<template>
  <div :class="[ 'c-coupon c1 u-mb20', { 'is-disabled': disabled } ]">
    <div class="c-coupon__body">
      <div class="c-coupon__title">
        <span class="fs24">￥</span>
        <span class="fs50">69</span>
        <span class="fs24">仅限满99元可用</span>
      </div>
      <div class="c-coupon__time fs20">有效期：2019.05.02-2019.05.06</div>
    </div>
    <div class="c-coupon__foot fs22">分享劵，满99减10元，全场通用</div>
  </div>
</template>

<script src="./script.js"></script>

<template>
  <div class="p-coupons">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac u-mb20">
      <li
        v-for="(item, index) in $consts.COUPON_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index)">
        {{ item.label }}
      </li>
    </ul>
    <div class="c-empty u-tac">
      <i class="c-icon c-icon--empty"></i>
      <p class="c8 fs28">空空如也...</p>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

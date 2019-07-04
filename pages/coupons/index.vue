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
    <c-empty></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

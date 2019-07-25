<template>
  <div class="p-coupons">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac u-mb20">
      <li
        v-for="(item, index) in $consts.COUPON_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index, item.value)">
        {{ item.label }}
      </li>
    </ul>
    <c-coupon
      v-for="item in list.items"
      :key="item.id"
      :item="item.coupon"
      :used="item.used"
      :created-at="item.createdAt"
      @select="select(item.coupon)">
    </c-coupon>
    <c-empty v-if="loaded && !list.items.length"></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

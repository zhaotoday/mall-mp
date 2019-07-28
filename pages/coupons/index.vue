<template>
  <div class="p-coupons">
    <ul
      v-if="loaded && !query.select"
      class="c-tabs o-grid bgc1 fs28 u-tac">
      <li
        v-for="(item, index) in $consts.COUPON_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index, item.value)">
        {{ item.label }}
      </li>
    </ul>
    <div class="u-pt20">
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
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

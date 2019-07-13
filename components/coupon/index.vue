<template>
  <div
    :class="[ 'c-coupon c1 u-mb20', { 'is-disabled': item.used } ]"
    @click="$emit('select')">
    <div class="c-coupon__body">
      <div class="c-coupon__title">
        <span class="fs24">￥</span>
        <span class="fs50">{{ item.value }}</span>
        <span class="fs24">{{ item.title }}</span>
      </div>
      <div class="c-coupon__time fs20">有效期：{{ $time.getTime(item.startsAt) }} - {{ $time.getTime(item.endsAt) }}</div>
    </div>
    <div class="c-coupon__foot fs22">
      满 ￥{{ item.minPrice }} 减 ￥{{ item.value }} 元，全场通用
    </div>
  </div>
</template>

<script src="./script.js"></script>

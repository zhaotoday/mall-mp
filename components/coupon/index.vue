<template>
  <div
    :class="[ 'c-coupon u-mb20', { 'is-disabled': used || (getTime() > getTime($time.add(createdAt, item.period, 'day'))) }, { 'is-new-user': isNewUser } ]"
    @click="$emit('select')">
    <div class="c-coupon__body">
      <div class="c-coupon__title">
        <span class="c-coupon__rmb fs24">￥</span>
        <span
          class="c-coupon__money fs50"
          style="padding-right: 10rpx;">
          {{ item.value }}
        </span>
        <span class="fs24">{{ item.name }}</span>
      </div>
      <div class="c-coupon__time fs20">有效期：{{ $time.getTime(createdAt) }} - {{ $time.getTime($time.add(createdAt,
        item.period, 'day')) }}
      </div>
      <div
        v-if="item.number"
        class="c-coupon__number fs28">
        x{{ item.number }}
      </div>
    </div>
    <div class="c-coupon__foot fs22">
      {{ $helpers.getItem(this.$consts.COUPON_TYPES, 'value', item.type)['label'] }}优惠券
    </div>
  </div>
</template>

<script src="./script.js"></script>

<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-new-user-coupon">
      <scroll-view
        class="c-new-user-coupon__coupons"
        scroll-y>
        <c-coupon
          v-for="item in items[0].coupons"
          :key="item.id"
          :item="item"
          is-new-user>
        </c-coupon>
      </scroll-view>
      <button
        class="c-button is-foot w528 h76 bgc22 c1 fs32"
        @click="$emit('confirm')">
        知道了
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

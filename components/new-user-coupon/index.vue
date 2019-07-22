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
      <c-coupon
        v-for="item in list.items"
        :key="item.id"
        :item="item"
        is-new-user>
      </c-coupon>
      <button
        class="c-button is-foot w528 h76 bgc22 c1 fs32"
        @click="$emit('confirm')">
        知道了
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<template>
  <div class="p-my">
    <div class="b-info bgc4 c1">
      <img
        class="c-avatar"
        :src="user.avatarUrl" />
      <div class="b-info__name fs40">{{ user.nickName }}</div>
      <div class="b-info__phone fs32">{{ user.phoneNumber || '[请绑定手机号]' }}</div>
      <div class="b-card bgc1">
        <ul class="b-orders">
          <li
            v-for="item in $consts.ORDER_STATUSES"
            :key="item.label"
            :class="[ 'b-orders__item', `b-orders__item--${item.value}` ]"
            @click="navigateTo(`/pages/orders/index?status=${item.code}`)">
            <div class="b-orders__title c10 fs26 u-tac">{{ item.label }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="b-list c-list bgc1 fs30">
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/addresses/list/index')">
        <i class="c-icon c-icon--address"></i>
        收货地址
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/coupons/index')">
        <i class="c-icon c-icon--coupon"></i>
        优惠券
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/collections/index')">
        <i class="c-icon c-icon--collection"></i>
        我的收藏
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/apply-merchant/index')">
        <i class="c-icon c-icon--to-be-business"></i>
        申请成为商家
      </div>
      <button
        class="c-list__item is-button has-icon is-link fs32"
        open-type="contact">
        <i class="c-icon c-icon--service"></i>
        客户服务
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

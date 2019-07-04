<template>
  <div class="p-pay">
    <div class="c-list bgc1 fs28 u-mt20">
      <div
        v-if="!ordersForm.address.id"
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/addresses/list/index?select=1')">
        <i class="c-icon c-icon--address"></i>
        收货地址
        <p class="c-list__extra c8 fs28">请选择收货地址</p>
      </div>
      <div
        v-else
        class="c-list__item has-icon is-link is-adaptable"
        @click="navigateTo('/pages/addresses/list/index?select=1')">
        <i class="c-icon c-icon--address"></i>
        <p class="c-list__desc">{{ ordersForm.address.name }} {{ ordersForm.address.phoneNumber }}</p>
        <p class="c-list__desc">{{ ordersForm.address.address + ordersForm.address.room }}</p>
      </div>
    </div>
    <div class="c-list bgc1 fs30 u-mt20">
      <div
        class="c-list__item is-link"
        @click="navigateTo('/pages/coupons/index?select=1')">
        优惠券
        <div class="c-list__extra c8 fs28">请选择优惠券</div>
      </div>
      <div
        class="c-list__item is-link"
        @click="navigateTo('/pages/remark/index')">
        备注
        <p
          v-if="!ordersForm.remark.value"
          class="c-list__extra c8 fs28">请填写备注</p>
        <p
          v-else
          class="c-list__extra w450">
          {{ ordersForm.remark.value }}
        </p>
      </div>
      <div class="c-list__item">
        商品数
        <div class="c-list__extra fs28">{{ cartProducts.length }} 件</div>
      </div>
      <picker
        class="c-list__item is-link"
        @change="handlePayWayChange"
        v-model="cPayWay.index"
        :range="cPayWay.range">
        支付方式
        <div class="c-list__extra fs28">
          {{ $consts.PAY_WAYS[cPayWay.index].label }}
        </div>
      </picker>
      <div class="c-list__item">
        商品总价
        <div class="c-list__extra fs28">￥{{ totalPrice }} 元</div>
      </div>
      <div class="c-list__item">
        合计
        <div class="c-list__extra c5 fs28">￥{{ totalPrice }} 元</div>
      </div>
    </div>
    <div class="b-pay bgc1">
      <div class="b-pay__money c5 fs32">￥{{ totalPrice }} 元</div>
      <div
        class="b-pay__submit bgc5 c1 fs32 u-tac"
        @click="handlePay">
        支付
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

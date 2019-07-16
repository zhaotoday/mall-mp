<template>
  <div class="p-dispatch">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac">
      <li
        v-for="item in $consts.DISPATCH_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === item.value } ]"
        @click="changeTab(item)">
        {{ item.label }}
      </li>
    </ul>
    <scroll-view
      class="b-list"
      scroll-y>
      <ul class="u-pt20">
        <li
          v-for="(order, index) in list.items"
          :key="order.id"
          :id="'order-' + index"
          class="b-list__item bgc1 u-mb20">
          <div class="b-list__head">
            <span
              class="fs24"
              style="padding-right: 10rpx;">
              订单号：{{ order.no }}
            </span>
            <div class="b-list__time c8 fs22">{{ $time.getTime(order.createdAt) }}</div>
          </div>
          <div class="b-list__body o-media">
            <div class="o-media__body">
              <p class="fs24">联系人：{{ order.address.name }}</p>
              <p class="fs24">手机号：{{ order.address.phoneNumber }}</p>
              <p class="fs24">地址：{{ order.address.location.name + order.address.room }}</p>
            </div>
          </div>
          <div class="b-list__foot">
            <template v-if="order.status === '3'">
              <div
                class="c-button w120 h48 bgc1 bdc4 c4 fs24"
                @click="makePhoneCall(order.address.phoneNumber)">
                打电话
              </div>
              <div
                class="c-button w96 h48 bgc1 bdc4 c4 fs24"
                @click="openLocation(order.address.location)">
                导航
              </div>
              <div
                class="c-button w96 h48 bgc1 bdc4 c4 fs24"
                @click="showReachConfirm(order)">
                送达
              </div>
            </template>
            <template v-else-if="order.status === '4'">
              <div class="c-button w120 h48 bgc7 c8 fs24">
                已完成
              </div>
            </template>
          </div>
        </li>
      </ul>
    </scroll-view>
    <c-empty v-if="!list.items.length && loaded"></c-empty>
    <c-dialog
      :visible="cReachConfirm.visible"
      title="请确认"
      content="确认订单已送达？"
      @cancel="cReachConfirm.visible = false"
      @confirm="reach">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

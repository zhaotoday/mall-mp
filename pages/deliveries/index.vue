<template>
  <div class="p-deliveries">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac">
      <li
        v-for="item in $consts.DELIVERY_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === item.value } ]"
        @click="changeTab(item)">
        {{ item.label }}
      </li>
    </ul>
    <scroll-view scroll-y>
      <ul class="c-orders u-pt20">
        <li
          v-for="(item, index) in list.items"
          :key="item.id"
          :id="'order-' + index"
          class="c-orders__item bgc1 u-mb20">
          <div class="c-orders__head">
            <span
              class="fs24"
              style="padding-right: 10rpx;">
              订单号：{{ item.no }}
            </span>
            <div class="c-orders__extra c8 fs22">{{ $time.getTime(item.createdAt) }}</div>
          </div>
          <div class="c-orders__body o-media">
            <div class="o-media__body">
              <p class="fs24">收货人：{{ item.address.name }}</p>
              <p class="fs24">手机号：{{ item.address.phoneNumber }}</p>
              <p class="fs24">地址：{{ item.address.location.name + item.address.room }}</p>
            </div>
          </div>
          <div class="c-orders__foot">
            <template v-if="item.status === 'IN_DELIVER'">
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="navigateTo(`/pages/order-detail/index?id=${item.id}`)">
                订单详情
              </div>
              <div
                class="c-button w120 h48 bgc1 bdc4 c4 fs24"
                @click="makePhoneCall(item.address.phoneNumber)">
                打电话
              </div>
              <div
                class="c-button w96 h48 bgc1 bdc4 c4 fs24"
                @click="openLocation(item.address.location)">
                导航
              </div>
              <div
                class="c-button w96 h48 bgc1 bdc4 c4 fs24"
                @click="showFinishConfirm(item)">
                送达
              </div>
            </template>
            <template v-else-if="item.status === 'FINISH'">
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="navigateTo(`/pages/order-detail/index?id=${item.id}`)">
                订单详情
              </div>
            </template>
          </div>
        </li>
      </ul>
    </scroll-view>
    <c-empty v-if="!list.items.length && loaded"></c-empty>
    <c-dialog
      :visible="cFinishConfirm.visible"
      title="请确认"
      content="确认订单已送达？"
      @cancel="cFinishConfirm.visible = false"
      @confirm="finish">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

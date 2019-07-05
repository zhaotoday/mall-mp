<template>
  <div class="p-orders">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac u-mb20">
      <li
        v-for="(item, index) in $consts.ORDER_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index)">
        {{ item.label }}
      </li>
    </ul>
    <ul class="b-list">
      <li
        v-for="order in list.items"
        :key="order.id"
        class="b-list__item bgc1 u-mb20">
        <div class="b-list__head">
          <span
            class="fs28"
            style="padding-right: 10rpx;">
            订单已完成
          </span>
          <span class="c8 fs22">{{ $time.getTime(order.createdAt) }}</span>
        </div>
        <div class="b-list__body o-media">
          <img
            class="o-media__image"
            mode="aspectFill"
            :src="$helpers.getImageById(order.products[0].pictures)"
          />
          <div class="o-media__body">
            <ul class="b-products">
              <li
                v-for="product in order.products"
                :key="product.id"
                class="b-products__item c10 fs26">
                {{ product.name }}
                <div class="b-products__number">x{{ product.number }}</div>
              </li>
            </ul>
            <div class="b-money fs28">共10份，实付 ￥{{ order.payMoney }}</div>
          </div>
        </div>
        <div class="b-list__foot">
          <div class="c-button w160 h48 bgc1 bdc4 c4 fs24">再来一单</div>
          <div class="c-button w160 h48 bgc4 c1 fs24">再来一单</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

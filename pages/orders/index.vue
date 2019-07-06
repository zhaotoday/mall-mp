<template>
  <div class="p-orders">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac u-mb20">
      <li
        v-for="item in $consts.ORDER_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === item.code } ]"
        @click="changeTab(item)">
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
            {{ $helpers.getItem($consts.ORDER_STATUSES, 'code', order.status)['label'] }}
          </span>
          <span class="c8 fs22">{{ $time.getTime(order.createdAt) }}</span>
        </div>
        <div class="b-list__body o-media">
          <img
            class="o-media__image"
            mode="aspectFill"
            :src="$helpers.getImageURL({ id: order.products[0].pictures, width: 110, height: 110 })"
          />
          <div class="o-media__body">
            <div class="b-products">
              <div
                v-for="product in order.products"
                :key="product.id">
                <template v-if="product.price">
                  <div class="b-products__item c10 fs26">
                    {{ product.name }}
                    <div class="b-products__number">x{{ product.number }}</div>
                  </div>
                </template>
                <template v-else>
                  <div
                    v-for="specification in product.specifications"
                    :key="specification.value"
                    v-if="specification.number"
                    class="b-products__item c10 fs26">
                    {{ product.name }}（{{ specification.price }} 元 / {{ specification.label }}）
                    <div class="b-products__number">x{{ specification.number }}</div>
                  </div>
                </template>
              </div>
            </div>
            <div class="b-money fs28">共 {{ getTotalNumber(order.products) }} 份，实付 ￥{{ order.paidMoney }}</div>
          </div>
        </div>
        <div class="b-list__foot">
          <div
            v-if="order.status === '2'"
            class="c-button w160 h48 bgc1 bdc4 c4 fs24">再来一单
          </div>
          <div class="c-button w160 h48 bgc4 c1 fs24">再来一单</div>
        </div>
      </li>
    </ul>
    <c-empty v-if="!list.items.length && loaded"></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

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
    <scroll-view scroll-y>
      <ul class="c-orders u-pt20">
        <li
          v-for="(order, index) in list.items"
          :key="order.id"
          :id="'order-' + index"
          class="c-orders__item bgc1 u-mb20">
          <div class="c-orders__head">
          <span
            class="fs28"
            style="padding-right: 10rpx;">
            {{ $helpers.getItem($consts.ORDER_STATUSES, 'code', order.status)['label'] }}
          </span>
            <span class="c8 fs22">{{ $time.getTime(order.updatedAt) }}</span>
          </div>
          <div class="c-orders__body o-media">
            <img
              class="o-media__image"
              mode="aspectFill"
              :src="$helpers.getImageURL({ id: order.products[0] ? order.products[0].pictures : 0, width: 110, height: 110 })"
            />
            <div class="o-media__body">
              <div class="cc-products">
                <div
                  v-for="product in order.products"
                  :key="product.id">
                  <template v-if="product.price">
                    <div class="cc-products__item c10 fs26">
                      {{ product.name }}
                      <div class="cc-products__number">x{{ product.number }}</div>
                    </div>
                  </template>
                  <template v-else>
                    <div
                      v-for="specification in product.specifications"
                      :key="specification.value"
                      v-if="specification.number"
                      class="cc-products__item c10 fs26">
                      {{ product.name }}（{{ specification.price }} 元 / {{ specification.label }}）
                      <div class="cc-products__number">x{{ specification.number }}</div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="b-money fs28">
                共 {{ getTotalNumber(order.products) }} 份，实付 ￥{{ order.paidMoney }}
                （{{ order.payWay === 'WECHATPAY' ? '在线支付' : '货到付款' }}）
              </div>
            </div>
          </div>
          <div class="c-orders__foot">
            <template v-if="order.status === 'TO_PAY'">
              <div
                class="c-button w160 h48 bgc4 c1 fs24"
                @click="pay(order)">
                立即付款
              </div>
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="showCancel(order)">
                取消订单
              </div>
            </template>
            <template v-else-if="order.status === 'TO_DELIVER'">
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="clone(order)">
                再来一单
              </div>
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="showCancel(order)">
                取消订单
              </div>
            </template>
            <template v-else-if="order.status === 'IN_DELIVER'">
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="clone(order)">
                再来一单
              </div>
            </template>
            <template v-else-if="order.status === 'FINISH'">
              <div
                class="c-button w160 h48 bgc1 bdc4 c4 fs24"
                @click="clone(order)">
                再来一单
              </div>
            </template>
            <template v-else-if="order.status === 'CANCELLED'">
              <div class="c-orders__tip c9 fs24">
                订单已被取消<span v-if="order.paidAt">，请联系客服退款</span>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </scroll-view>
    <c-empty v-if="!list.items.length && loaded"></c-empty>
    <c-dialog
      :visible="cCancel.visible"
      title="请确认"
      content="确认取消订单？"
      @cancel="cCancel.visible = false"
      @confirm="confirmCancel">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

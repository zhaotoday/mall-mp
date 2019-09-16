<template>
  <div
    v-if="detail.id"
    class="p-order-detail">
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        订单号
        <div class="c-list__value c10 fs26">
          {{ detail.no }}
        </div>
      </li>
      <li class="c-list__item">
        下单时间
        <div class="c-list__value c10 fs26">
          {{ $time.getTime(detail.createdAt) }}
        </div>
      </li>
      <li class="c-list__item">
        支付方式
        <div class="c-list__value c10 fs26">
          {{ $helpers.getItem($consts.PAY_WAYS, 'value', detail.payWay)['label'] }}
        </div>
      </li>
      <li class="c-list__item">
        订单状态
        <div class="c-list__value c10 fs26">
          {{ $helpers.getItem($consts.ORDER_STATUSES, 'code', detail.status)['label'] }}
        </div>
      </li>
      <li class="c-list__item">
        支付金额
        <div class="c-list__value c10 fs26">
          {{ detail.paidMoney }} 元
        </div>
      </li>
    </ul>
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item is-adaptable">
        <div class="cc-products__label">购买商品</div>
        <div class="cc-products">
          <div
            v-for="product in detail.products"
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

      </li>
    </ul>
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        收货人
        <div class="c-list__value c10 fs26">
          {{ detail.address.name }}
        </div>
      </li>
      <li class="c-list__item">
        手机号
        <div class="c-list__value c10 fs26">
          {{ detail.address.phoneNumber }}
        </div>
      </li>
    </ul>
    <ul
      v-if="detail.delivererId"
      class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        配送员
        <div class="c-list__value c10 fs26">
          {{ detail.deliverer.nickName }}
        </div>
      </li>
      <li class="c-list__item">
        手机号
        <div class="c-list__value c10 fs26">
          {{ detail.deliverer.phoneNumber }}
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

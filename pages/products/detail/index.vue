<template>
  <div class="p-products-detail">
    <div class="bgc1 u-mb20">
      <div class="b-picture">
        <img
          v-if="detail.pictures"
          mode="aspectFill"
          :src="$helpers.getImageURL({ id: detail.pictures, width: 500, height: 500 })"
        />
      </div>
      <div class="b-name u-tac fs40">{{ detail.name }}</div>
      <div
        v-if="detail.price"
        class="b-price u-tac">
        <span class="c5 fs20">￥</span>
        <span class="c5 fs50">{{ detail.price }}</span>
      </div>
    </div>
    <c-specifications
      v-if="detail.specifications[0]"
      :items="detail.specifications"
      @change="changeSpecification">
    </c-specifications>
    <div class="c-panel bgc1 u-mb20">
      <div class="c-panel__head">
        <div class="c-panel__title fs32">服务保障</div>
      </div>
      <div class="c-panel__body u-mb20">
        <ul class="c-guarantees">
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--delivery"></i>
            <h2 class="c-guarantees__title fs28">配送服务</h2>
            <p class="c-guarantees__desc c9 fs24">
              该商品支持次日送达
            </p>
          </li>
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--after-sale"></i>
            <h2 class="c-guarantees__title fs28">售后服务</h2>
            <p class="c-guarantees__desc c9 fs24">
              该商品支持签收起 8 小时内有质量问题可退
            </p>
          </li>
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--pay"></i>
            <h2 class="c-guarantees__title fs28">支付方式</h2>
            <p class="c-guarantees__desc c9 fs24">
              在线支付：微信<br />
              货到付款：现金、支付宝、微信、银行卡
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-panel bgc1 u-mb20">
      <div class="c-panel__head">
        <div class="c-panel__title fs32">详细信息</div>
      </div>
      <div
        class="c-panel__body c-panel__body--p30 fs24"
        v-html="detail.content">
      </div>
    </div>
    <c-product-actions :item="detail">
      <div slot="add-cart">
        <template v-if="detail.id && !detail.specifications.length">
          <c-add-to-cart
            :key="-1"
            :detail="detail"
            :specification-index="-1"
            :number="getNumber(detail)"
            @add="addNumber(detail)"
            @subtract="subtractNumber(detail)">
          </c-add-to-cart>
        </template>
        <template v-if="detail.id && detail.specifications.length">
          <div v-if="cSpecifications.current === -1">
            <c-add-to-cart
              :detail="detail"
              :specification-index="cSpecifications.current"
              :number="0"
              @add="addNumber(detail)">
            </c-add-to-cart>
          </div>
          <div
            v-for="(specification, index) in (detail.specifications || [])"
            v-show="index === cSpecifications.current"
            :key="specification.value">
            <c-add-to-cart
              :detail="detail"
              :specification-index="cSpecifications.current"
              :number="getNumber(detail, specification)"
              @add="addNumber(detail, detail.specifications[index])"
              @subtract="subtractNumber(detail, detail.specifications[index])">
            </c-add-to-cart>
          </div>
        </template>
      </div>
    </c-product-actions>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

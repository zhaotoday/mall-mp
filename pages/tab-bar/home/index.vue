<template>
  <div class="p-index u-pb20">
    <c-search @focus="navigateTo('/pages/products/search/index')"></c-search>
    <c-swiper :items="adsImages"></c-swiper>
    <ul class="b-categories bgc1 u-mb20">
      <li
        v-for="item in categoriesTree"
        :key="item.id"
        class="b-categories__item fs26 u-tac"
        @click="gotoCategories(item.id)">
        <img
          class="b-categories__image"
          :src="$helpers.getImageURL({ id: item.icon, width: 88, height: 88 })" />
        <div class="b-categories__name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="c-card bgc1">
      <div class="c-card__head green has-border fs32">
        掌柜推荐
      </div>
      <div class="c-card__body">
        <c-products :items="hotProductsList.items"></c-products>
      </div>
    </div>
    <div
      v-if="myProductsList.items.length"
      class="c-card bgc1 u-mt20">
      <div class="c-card__head green has-border fs32">
        经常购买
      </div>
      <div class="c-card__body">
        <c-products :items="myProductsList.items"></c-products>
      </div>
    </div>
    <c-fixed-cart has-tab></c-fixed-cart>
    <c-new-user-coupon
      :visible="cNewUserCoupon.visible"
      :items="cNewUserCoupon.list.items"
      @cancel="knowNewUserCoupon"
      @confirm="knowNewUserCoupon">
    </c-new-user-coupon>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

<template>
  <div class="p-index u-pb20">
    <c-search @focus="navigateTo('/pages/products/search/index')"></c-search>
    <c-swiper :items="adsImages"></c-swiper>
    <ul class="b-categories bgc1 u-mb20">
      <li
        v-for="item in categoriesTree"
        :key="item.id"
        class="b-categories__item fs22 u-tac"
        @click="goCategories(item.id)">
        <img
          class="b-categories__image"
          :src="$helpers.getImageById(item.icon)" />
        <div class="b-categories__name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="c-card bgc1">
      <div class="c-card__head green has-border fs32">
        热销产品
      </div>
      <div class="c-card__body">
        <ul class="c-products">
          <li
            v-for="item in hotProductsList.items"
            :key="item.id"
            class="c-products__item"
            @click="navigateTo(`/pages/products/detail/index?id=${item.id}`)">
            <img
              class="c-products__image"
              :src="$helpers.getImageById(item.pictures)"
            />
            <div class="c-products__info">
              <div class="c-products__name fs32">{{ item.name }}</div>
              <div class="c-products__price c5 fs30">
                <span class="fs20">￥</span>
                <template v-if="!!item.price">
                  {{ item.price }}
                  {{ item.unit ? `元/${$helpers.getItem($consts.PRODUCT_UNITS, 'value', item.unit)['label']}` : '' }}
                </template>
                <template v-else>
                  {{ getPriceRange(item) }}
                </template>
              </div>
            </div>
            <template v-if="item.price">
              <c-number-input
                :key="item.id"
                :number="getNumber(item)"
                @add="addNumber(item)"
                @subtract="subtractNumber(item)">
              </c-number-input>
            </template>
            <template v-else>
              <div
                :class="[ 'c-products__cart c-icon', `c-icon--arrow-${item.visible ? 'up' : 'down'}` ]"
                @click.stop="toggleSpecification(hotProductsList.items, item)">
              </div>
            </template>
            <div
              v-show="item.visible"
              v-for="specification in item.specifications"
              :key="specification.value"
              class="c-products__specification">
              <p class="c-products__price c5 fs30">
                <span class="fs20">￥</span>
                {{ getUnitPrice(specification, item.unit) }}
              </p>
              <p class="c-products__tag fs20">
                {{ specification.price }} 元 / {{ specification.label }}
              </p>
              <c-number-input
                :key="specification.value"
                :number="getNumber(item, specification)"
                @add="addNumber(item, specification)"
                @subtract="subtractNumber(item, specification)">
              </c-number-input>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

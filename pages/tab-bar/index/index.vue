<template>
  <div class="p-index">
    <c-search></c-search>
    <c-swiper :items="adsImages"></c-swiper>
    <ul class="b-categories bgc1 u-mb20">
      <li
        v-for="item in categoriesList.items"
        :key="item.id"
        class="b-categories__item fs22 u-tac"
        @click="switchTab('/pages/tab-bar/categories/index')">
        <img
          class="b-categories__image"
          :src="$helpers.getImageById(item.icon)" />
        <div class="b-categories__name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="c-card bgc1 u-mb20">
      <div class="c-card__head green has-border fs32">
        热销产品
      </div>
      <div class="c-card__body">
        <ul class="c-products">
          <li
            v-for="item in productsList.items"
            :key="item.id"
            class="c-products__item">
            <img
              class="c-products__image"
              :src="$helpers.getImageById(item.pictures)" />
            <div class="c-products__info">
              <div class="c-products__name fs32">{{ item.name }}</div>
              <div class="c-products__desc fs22">香甜可口 夏日首选</div>
              <div class="c-products__tag fs20">100 元/包</div>
              <div class="c-products__price c5 fs40">
                <span class="fs20">￥</span>
                {{ item.price }}</div>
            </div>
            <div class="c-products__cart c-icon c-icon--add-bg"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-card bgc1">
      <div class="c-card__head yellow has-border fs32">
        经常购买
      </div>
      <div class="c-card__body">
        <ul class="c-products">
          <li
            v-for="item in productsList.items"
            :key="item.id"
            class="c-products__item">
            <img
              class="c-products__image"
              :src="$helpers.getImageById(item.pictures)" />
            <div class="c-products__info">
              <div class="c-products__name fs32">{{ item.name }}</div>
              <div class="c-products__desc fs22">香甜可口 夏日首选</div>
              <div class="c-products__tag fs20">100 元/包</div>
              <div class="c-products__price c5 fs40">
                <span class="fs20">￥</span>
                {{ item.price }}</div>
            </div>
            <div class="c-products__cart c-icon c-icon--add-bg"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'
import CSearch from '@/components/search'

export default {
  components: { CSwiper, CSearch },
  computed: {
    ...mapState({
      adsList: state => state['public/ads'].list,
      categoriesList: state => state['public/categories'].list,
      productsList: state => state['public/products'].list
    }),
    adsImages () {
      return this.adsList.items.map(item => this.$helpers.getImageById(item.picture))
    }
  },
  onLoad () {
    this.getAdsList()
    this.getCategoriesList()
    this.getProductsList()
  },
  methods: {
    getAdsList () {
      return this.$store.dispatch('public/ads/getList', {
        query: {}
      })
    },
    getCategoriesList () {
      return this.$store.dispatch('public/categories/getList', {
        query: {
          alias: 'products',
          where: {
            parentId: {
              $eq: 0
            }
          }
        }
      })
    },
    getProductsList () {
      return this.$store.dispatch('public/products/getList', {
        query: {}
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

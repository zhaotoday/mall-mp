<template>
  <div class="p-index">
    <CSwiper :items="adsImages" />
    <ul class="pb-categories u-mb20">
      <li
        v-for="item in categoriesList.items"
        :key="item.id"
        class="pb-categories__item fs22 u-tac"
        @click="switchTab('/pages/tab-bar/categories/index')">
        <img :src="$helpers.getImageById(item.icon)" />
        {{ item.name }}
      </li>
    </ul>
    <div class="c-card">
      <div class="c-card__head has-border fs30">
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
            <div class="c-products__name fs24">{{ item.name }}</div>
            <div class="c-products__price c7 fs26">{{ item.price }} 元</div>
            <div class="c-products__cart c-icon c-icon--cart"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'

export default {
  components: {
    CSwiper
  },
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
      return this.$store.dispatch('public/ads/getList', {})
    },
    getCategoriesList () {
      return this.$store.dispatch('public/categories/getList', {
        query: { alias: 'products' }
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

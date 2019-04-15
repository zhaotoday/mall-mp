<template>
  <div class="p-index">
    <CSwiper :items="adsImages" />
    <ul class="pb-categories">
      <li
        v-for="item in categoriesList.items"
        :key="item.id"
        class="pb-categories__item fs20 u-tac">
        <img :src="$helpers.getImageById(item.icon)" />
        {{ item.name }}
      </li>
    </ul>
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
      categoriesList: state => state['public/categories'].list
    }),
    adsImages () {
      return (this.adsList.items || []).map(item => this.$helpers.getImageById(item.picture))
    }
  },
  onLoad () {
    this.getAdsList()
    this.getCategoriesList()
  },
  methods: {
    getAdsList () {
      return this.$store.dispatch('public/ads/getList', {})
    },
    getCategoriesList () {
      return this.$store.dispatch('public/categories/getList', {
        query: { alias: 'products' }
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

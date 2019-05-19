<template>
  <div class="p-cart">
    <ul class="c-products is-editable bgc1 u-mt20">
      <li
        v-for="item in productsList.items"
        :key="item.id"
        class="c-products__item">
        <c-checkbox
          class="c-products__checkbox"
          :checked="true">
        </c-checkbox>
        <img
          class="c-products__image"
          :src="$helpers.getImageById(item.pictures)" />
        <div class="c-products__info">
          <div class="c-products__name fs32">{{ item.name }}</div>
          <div class="c-products__desc fs22">香甜可口 夏日首选</div>
          <div class="c-products__tag fs20">100 元/包</div>
          <div class="c-products__price c5 fs40">
            <span class="fs20">￥</span>
            {{ item.price }}
          </div>
        </div>
        <c-number-input></c-number-input>
      </li>
    </ul>
    <c-cart-manager></c-cart-manager>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CCheckbox from '@/components/checkbox'
import CCartManager from '../../../components/cart-manager/index'
import CNumberInput from '../../../components/number-input/index'

export default {
  components: { CNumberInput, CCartManager, CCheckbox },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      productsList: state => state['public/products'].list
    })
  },
  onLoad () {
    this.getProductsList()
  },
  methods: {
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

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
          <div class="c-products__price c5 fs30">
            <span class="fs20">￥</span>
            <template v-if="!!item.price">
              {{ item.price }} {{item.unit ? `元/${$helpers.getItem($consts.PRODUCT_UNITS, 'value', item.unit)['label']}`
              : '' }}
            </template>
            <template v-else>
              {{ getPriceRange(item) }}
            </template>
          </div>
        </div>
        <template v-if="!!item.price">
          <template v-if="!item.number">
            <div
              class="c-products__cart c-icon c-icon--add-bg"
              @click="handleAddNumber(item)">
            </div>
          </template>
          <template v-else>
            <c-number-input
              :key="item.id"
              :number="item.number"
              @add="handleAddNumber(item)"
              @subtract="handleSubtractNumber(item)">
            </c-number-input>
          </template>
        </template>
        <template v-else>
          <div
            v-show="!item.visible"
            :class="[ 'c-products__cart', 'c-icon', `c-icon--${item.price ? 'add-bg' : 'arrow-down'}` ]"
            @click="handleToggleSpecification(item)">
          </div>
          <div
            v-show="item.visible"
            class="c-products__cart c-icon c-icon--arrow-up"
            @click="handleToggleSpecification(item)">
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
          <c-number-input></c-number-input>
        </div>
      </li>
    </ul>
    <c-cart-manager></c-cart-manager>
  </div>
</template>

<script>
import CCheckbox from '@/components/checkbox'
import CCartManager from '@/components/cart-manager/index'
import CNumberInput from '@/components/number-input/index'
import productsMixin from '@/mixins/products'

export default {
  components: { CNumberInput, CCartManager, CCheckbox },
  mixins: [productsMixin],
  data () {
    return {
      productsList: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    if (this.$auth.loggedIn()) {
      this.cart = await this.getCart()
    }

    this.productsList = await this.getProductsList()
  },
  methods: {
    async getProductsList () {
      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: {}
      })

      return {
        items: items.map(item => {
          const cartProduct = this.cart.find(product => product.id === item.id)

          return {
            ...item,
            visible: false,
            number: cartProduct ? cartProduct.number : 0,
            specifications: item.specifications
              ? item.specifications.map(item => ({
                ...item,
                number: 0
              }))
              : []
          }
        }) || [],
        total
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

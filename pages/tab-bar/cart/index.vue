<template>
  <div class="p-cart">
    <ul class="c-products is-editable bgc1 u-mt20">
      <li
        v-for="item in cart"
        :key="item.id"
        class="c-products__item">
        <c-checkbox
          class="c-products__checkbox"
          :checked="item.checked"
          @change="handleCheckboxChange(item)">
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
          <template v-if="!specification.number">
            <div
              class="c-products__cart c-icon c-icon--add-bg"
              @click="handleAddNumber(item, specification)">
            </div>
          </template>
          <template v-else>
            <c-number-input
              :key="specification.value"
              :number="specification.number"
              @add="handleAddNumber(item, specification)"
              @subtract="handleSubtractNumber(item, specification)">
            </c-number-input>
          </template>
        </div>
      </li>
    </ul>
    <c-cart-manager
      :cart="cart"
      @check="handleCartManagerCheck">
    </c-cart-manager>
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
  async onShow () {
    if (this.$auth.loggedIn()) {
      this.cart = await this.getCart()
    }
  },
  methods: {
    handleCartManagerCheck (all) {
      this.cart = this.cart.map(item => ({ ...item, checked: all }))
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

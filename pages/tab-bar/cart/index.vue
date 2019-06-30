<template>
  <div class="p-cart">
    <ul class="c-products is-editable bgc1 u-mt20">
      <li
        v-for="item in cartProducts"
        :key="item.id"
        class="c-products__item">
        <c-checkbox
          class="c-products__checkbox"
          :checked="item.checked"
          @change="handleCheckboxChange(item)">
        </c-checkbox>
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
            @click.stop="toggleSpecification(cartProducts, item)">
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
    <c-cart-manager
      :cart-products="cartProducts"
      @check="handleCartManagerCheck">
    </c-cart-manager>
  </div>
</template>

<script>
import CCheckbox from '@/components/checkbox'
import CCartManager from '@/components/cart-manager/index'
import CNumberInput from '@/components/number-input/index'
import productsMixin from '@/mixins/products'
import cartProductsMxins from '@/mixins/cart-products'

export default {
  components: { CNumberInput, CCartManager, CCheckbox },
  mixins: [productsMixin, cartProductsMxins]
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

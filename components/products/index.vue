<template>
  <ul :class="[ 'c-products bgc1', { 'is-editable':  editable } ]">
    <li
      v-for="item in items"
      :key="item.id"
      class="c-products__item">
      <c-checkbox
        v-if="editable"
        class="c-products__checkbox"
        :checked="item.checked"
        @change="handleCheckboxChange(item)">
      </c-checkbox>
      <img
        class="c-products__image"
        :src="$helpers.getImageURL({ id: item.pictures, width: 168, height: 168 })"
        @click="navigateTo(`/pages/products/detail/index?id=${item.id}`)"
      />
      <div
        class="c-products__info"
        @click="navigateTo(`/pages/products/detail/index?id=${item.id}`)">
        <div class="c-products__name fs32">{{ item.name }}</div>
        <div class="c-products__price c5 fs32">
          <span class="fs20">￥</span>
          <template v-if="item.price">
            {{ item.price }}
            {{ item.unit ? `元 / ${$helpers.getItem($consts.PRODUCT_UNITS, 'value', item.unit)['label']}` : '' }}
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
          @click.stop="toggleSpecification(items, item, editable)">
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
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

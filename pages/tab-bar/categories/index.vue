<template>
  <div class="p-categories">
    <scroll-view
      class="b-sidebar bgc6"
      scroll-y>
      <li
        v-for="(item, index) in categoriesTree"
        :key="item.id"
        :class="[ 'b-sidebar__item', 'fs28', { 'is-active': index === cSidebar.index } ]"
        @click="handleClickSidebarItem(index)">
        <p>{{ item.name }}</p>
      </li>
    </scroll-view>
    <scroll-view
      class="b-main bgc1"
      scroll-y>
      <div
        v-if="!!categoriesTree[cSidebar.index].banner"
        class="b-banner-wrap">
        <img
          class="b-banner"
          :src="$helpers.getImageURL({ id: (categoriesTree[cSidebar.index] || {})['banner'], width: 510, height: 200 })" />
      </div>
      <ul class="b-categories">
        <li
          class="b-categories__item"
          v-for="item in (categoriesTree[cSidebar.index] || {}).children || []"
          :key="item.id"
          @click="navigateTo(`/pages/products/list/index?categoryId=${item.id}&categoryName=${item.name}`)">
          <img
            class="b-categories__image"
            :src="$helpers.getImageURL({ id: item.icon, width: 110, height: 110 })" />
          <p class="b-categories__name c10 fs24 u-fwb">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

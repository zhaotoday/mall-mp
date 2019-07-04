<template>
  <div class="p-addresses-map bgc1">
    <c-search
      ref="search"
      placeholder="请输入小区/写字楼"
      @confirm="search">
    </c-search>
    <scroll-view
      class="b-result"
      scroll-y>
      <ul class="c-list bgc1">
        <li
          v-for="item in addresses"
          :key="item.id"
          class="c-list__item is-adaptable">
          <p class="c-list__desc fs28">{{ item.name }}</p>
          <p class="c-list__desc c9 fs24">{{ item.address }}</p>
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

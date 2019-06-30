<template>
  <div class="p-products-search bgc1">
    <c-search
      ref="search"
      auto-focus
      show-submit
      @confirm="search">
    </c-search>
    <h2 class="b-title fs28">
      历史搜索
      <i
        class="c-icon c-icon--del"
        @click="clearHistory">
      </i>
    </h2>
    <ul class="b-tags">
      <li
        v-for="item in 8"
        :key="item"
        class="b-tags__item c-tag h60 bgc7 c10 fs28">
        好又多
      </li>
    </ul>
    <h2 class="b-title fs28">历史搜索</h2>
    <ul class="b-tags">
      <li
        v-for="item in 8"
        :key="item"
        class="b-tags__item c-tag h60 bgc7 c10 fs28">
        好又多
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

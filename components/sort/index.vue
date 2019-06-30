<template>
  <ul class="c-sort o-grid bgc1 fs28">
    <li
      v-for="(item, index) in mappedItems"
      :key="item.value"
      :class="[
        'c-sort__item o-grid__cell u-tac',
        { 'is-active': index === current },
        { 'is-sortable': item.sortable && !item.dir },
        { 'is-up': item.sortable && item.dir === 'up' },
        { 'is-down': item.sortable && item.dir === 'down' }
      ]"
      @click="change(index)">
      {{ item.label }}
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

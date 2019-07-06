<template>
  <picker
    @change="handleChange"
    :value="index"
    :range="items.map(item => `${item.price} 元 / ${item.label}`)">
    <div class="c-list bgc1 fs30 u-mb20">
      <div class="c-list__item is-link">
        规格
        <div
          v-if="current === -1"
          class="c-list__extra c8 fs28">
          请选择规格
        </div>
        <div
          v-else
          class="c-list__extra fs28">
          {{ `${items[current].price} 元 / ${items[current].label}` }}
        </div>
      </div>
    </div>
  </picker>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

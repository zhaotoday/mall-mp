<template>
  <div class="p-products-list">
    <c-search
      ref="search"
      auto-focus
      has-submit
      @confirm="search">
    </c-search>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./styles.scss">
</style>

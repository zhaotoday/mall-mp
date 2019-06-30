<template>
  <div class="p-products-list">
    <c-search
      ref="search"
      has-submit
      :default-value="keywords"
      @confirm="search">
    </c-search>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./styles.scss">
</style>

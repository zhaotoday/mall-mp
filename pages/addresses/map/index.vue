<template>
  <div class="p-addresses-map bgc1">
    <c-search
      ref="search"
      placeholder="请输入小区/写字楼"
      @confirm="search()">
    </c-search>
    <map
      class="b-map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      scale="14"
      show-location>
    </map>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

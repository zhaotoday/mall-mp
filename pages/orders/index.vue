<template>
  <div class="p-orders">
    <ul class="c-tabs o-grid bgc1 fs28 u-tac u-mb20">
      <li
        v-for="(item, index) in $consts.ORDER_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index)">
        {{ item.label }}
      </li>
    </ul>
    <ul class="b-list bgc1">
      <li class="b-list__item u-mb20">
        <div class="b-list__head">
          <span
            class="fs28"
            style="padding-right: 10rpx;">
            订单已完成</span>
          <span class="c8 fs22">2019-04-25 13:17:49</span>
        </div>
        <div class="b-list__body o-media">
          <img
            class="o-media__image"
            mode="aspectFill"
            src="https://api.fjnm.cn/files/2019-05-27/aa365c20-7fdd-11e9-a72d-25bd1ddba1cf.jpg"
          />
          <div class="o-media__body">
            <ul class="b-products">
              <li
                v-for="item in 8"
                :key="item"
                class="b-products__item c10 fs26">
                发射点犯得上反对士大夫但是
                <div class="b-products__number">x1</div>
              </li>
            </ul>
            <div class="b-money fs28">共10份，实付 ￥123.28</div>
          </div>
        </div>
        <div class="b-list__foot">
          <div class="c-button w160 h48 bgc1 bdc4 c4 fs24">再来一单</div>
          <div class="c-button w160 h48 bgc4 c1 fs24">再来一单</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

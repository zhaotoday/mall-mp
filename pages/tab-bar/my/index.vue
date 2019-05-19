<template>
  <div class="p-my">
    <div class="b-info bgc4 c1">
      <img
        class="c-avatar"
        src="./images/avatar.jpg" />
      <div class="b-info__name fs40">赵丽颖</div>
      <div class="b-info__phone fs32">手机号：13950442340</div>
      <div class="b-card bgc1">
        <ul class="b-orders">
          <li
            v-for="item in [ 'all', 'to-pay', 'to-deliver', 'in-deliver', 'finish' ]"
            :key="item"
            :class="[ 'b-orders__item', `b-orders__item--${item}` ]">
            <div class="b-orders__title c10 fs26 u-tac">全部</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ORDER_STATUSES = [
  // 'all', 'to-pay', 'to-deliver', 'in-deliver', 'finish'
  {
    value: 'all',
    label: '全部'
  },
  {
    value: 'to-pay',
    label: '待付款'
  }
]

export default {}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

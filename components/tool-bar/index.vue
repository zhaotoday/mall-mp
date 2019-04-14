<template>
  <div class="c-tool-bar">
    <div class="o-grid">
      <div class="o-grid__cell">
        <button
          class="c-button c-button--1 bgc3 c1 fs32"
          open-type="share"
          @click="">
          推荐给好友
        </button>
      </div>
      <div class="o-grid__cell">
        <div
          class="c-button c-button--1 bgc9 c1 fs32"
          @click="">
          获取优惠券
        </div>
      </div>
      <div class="o-grid__cell">
        <div
          class="c-button c-button--1 bgc9 c1 fs32"
          @click="handleGoUC">
          会员中心
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleGoUC () {
      this.$wx.navigateTo({ url: '/pages/uc/index' })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

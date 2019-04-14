<template>
  <div class="p-uc">
    <div class="pb-wrap">
      <img
        class="pb-avatar"
        :src="user.avatarUrl" />
      <div class="pb-nickname c1 fs34">{{ user.nickName }}</div>
      <div class="pb-cell c-cell">
        <div class="c-cell__item fs28">
          <div class="c-cell__icon c-icon c-icon--point"></div>
          <div class="c-cell__label">积分</div>
          <div class="c-cell__value">100</div>
        </div>
        <div class="c-cell__item fs28">
          <div class="c-cell__icon c-icon c-icon--contact"></div>
          <div class="c-cell__label">客服</div>
          <div
            class="c-cell__value"
            data-text="13950442340"
            @click="handleCopyTelephone">
            13950442340(微信手机同号)
          </div>
          <!--
          <div class="c-cell__addon-icon c-icon c-icon--call"></div>
          -->
        </div>
        <div class="c-cell__item fs28">
          <div class="c-cell__icon c-icon c-icon--phone"></div>
          <div class="c-cell__label">手机号</div>
          <div class="c-cell__value">13950442340</div>
        </div>
      </div>
    </div>
    <div class="pb-point-tabs c-tabs">
      <div class="c-tabs__tabs fs32">
        <div
          v-for="(item, index) in pointTypes"
          :key="item.value"
          :class="[ 'c-tabs__tab', { 'is-active': cPointTabs.current === index } ]"
          @click="cPointTabs.current = index">
          {{ item.label }}
        </div>
      </div>
      <swiper
        class="c-swiper__swiper"
        :current="cPointTabs.current"
        @change="handlePointContentChange">
        <swiper-item>
          <div class="c-tabs__content">
            <ul class="c-list">
              <li class="c-list__item">
                <div class="c-list__item-title c2 fs30">您推荐了 15 个好友，获得 100 积分</div>
                <div class="c-list__item-addon c4 fs24">2018-12-20</div>
              </li>
              <li class="c-list__item">
                <div class="c-list__item-title c2 fs30">您推荐了 15 个好友，获得 100 积分</div>
                <div class="c-list__item-addon c4 fs24">2018-12-20</div>
              </li>
              <li class="c-list__item">
                <div class="c-list__item-title c2 fs30">您推荐了 15 个好友，获得 100 积分</div>
                <div class="c-list__item-addon c4 fs24">2018-12-20</div>
              </li>
              <li class="c-list__item">
                <div class="c-list__item-title c2 fs30">您推荐了 15 个好友，获得 100 积分</div>
                <div class="c-list__item-addon c4 fs24">2018-12-20</div>
              </li>
            </ul>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="c-tabs__content">
            <div class="pb-point-tabs__no-data">暂无分享积分</div>
          </div>
        </swiper-item>
      </swiper>


    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cPointTabs: {
        current: 0
      }
    }
  },
  computed: {
    user () {
      return this.$auth.get().user
    },
    pointTypes () {
      return this.$consts.POINT_TYPES
    }
  },
  methods: {
    async handleCopyTelephone (e) {
      /*
      await this.$wx.setClipboardData({
        data: e.currentTarget.dataset.text
      })

      // this.$wx.showToast({ title: '已复制微信号，请返回微信添加好友' })
      */
    },
    handlePointContentChange (e) {
      this.cPointTabs.current = e.mp.detail.current
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

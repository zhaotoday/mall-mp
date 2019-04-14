<template>
  <CPopup
    :visible="visible"
    @close="visible = false">
    <div slot="content">
      <div
        v-show="visible"
        class="c-share-popup">
        <div
          class="c-icon c-icon--close"
          @click="$emit('close')">
        </div>
        <div class="c-share-popup__coupon"></div>
        <div class="cc-friend">
          <img
            class="cc-friend__avatar"
            src="https://wx.qlogo.cn/mmopen/vi_32/T1icBtDxBUxtibJfgD1slP5ZpkaCZ46Kiar4AVwZFOhz2L4BgNaqZQwYsD9Gu9m7fmc8PFoAcyWjV3ic6HyK8XZJbg/132" />
          <div class="cc-friend__tip c10 fs24">您的好友分享了一张“重阳养老”的优惠券给您！</div>
        </div>
      </div>
    </div>
  </CPopup>
</template>

<script>
import CPopup from '../../popup'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CPopup
  },
  methods: {}
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

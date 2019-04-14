<template>
  <div class="p-home">
    <video
      class="pb-video"
      src="https://www.chongyangyanglao.com/apis/v1/files/396"
      :autoplay="cVideo.autoplay"
      controls>
    </video>
    <div
      class="pb-telephone"
      @click="handleMakePhoneCall">
      400-918-9833
    </div>
    <div class="o-grid">
      <div class="o-grid__cell">
        <div
          class="c-button c-button--1 bgc3 c1 fs32"
          @click="handleOpenLocation">
          位置导航
        </div>
      </div>
      <div class="o-grid__cell">
        <div
          class="c-button c-button--1 bgc3 c1 fs32"
          @click="navigateTo('/pages/bus/index')">
          免费班车
        </div>
      </div>
    </div>

    <div class="pb-point-guide">积分规则</div>
    <CToolBar />
    <CSharePopup
      :visible="cSharePopup.visible"
      @close="cSharePopup.visible = false" />
  </div>
</template>

<script>
import CToolBar from '@/components/tool-bar'
import CSharePopup from '@/components/popups/share'

export default {
  components: {
    CToolBar,
    CSharePopup
  },
  data () {
    return {
      cVideo: {
        autoplay: true
      },
      cSharePopup: {
        visible: true
      }
    }
  },
  onShareAppMessage () {
    return {
      title: '还差一个帮帮砍就可以免费参加这个测试啦。麻烦你帮我打开点击帮砍一下，不胜感激，谢谢老板！',
      path: '/pages/ask-for/index/main'
      // imageUrl: `${this.$consts.CDN_URL}/pages/ask-for/index/share.png`
    }
  },
  async onShow () {
    /*
    this.$wx.showToast({ title: '吐司' })

    await this.$helpers.sleep(2000)

    this.$wx.navigateTo({
      requiresLogin: true,
      url: '/pages/share/index'
    })
    */
  },
  methods: {
    handleMakePhoneCall () {
      this.$wx.makePhoneCall({ phoneNumber: '400-918-9833' })
    },
    async handleOpenLocation () {
      this.$wx.openLocation({
        name: '捷福创意产业园区',
        address: '福州市仓山区金工路 28 号捷福创意产业园 4 号楼 6 层华邦（福建）光电科技有限公司',
        latitude: 26.04769,
        longitude: 119.27345,
        scale: 17
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

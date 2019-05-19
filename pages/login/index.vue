<template>
  <div class="p-login">
    <div class="b-logo-wrap">
      <c-logo></c-logo>
    </div>
    <h2 class="b-title fs32">该程序将获取以下授权：</h2>
    <p class="b-desc c9 fs28">获得您的公开信息（昵称、头像等）</p>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      open-type="getUserInfo"
      @getuserinfo="handleGetUserInfo">
      授权登录
    </button>
  </div>
</template>

<script>
import { utils } from 'mp-client'
import CLogo from '@/components/logo'

export default {
  components: { CLogo },
  methods: {
    async handleGetUserInfo (e) {
      const { iv, encryptedData } = e.mp.detail
      const getSettingRes = await this.$wx.getSetting()
      const loginRes = await this.$wx.login({
        withCredentials: true
      })

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.showToast({ title: '您需要授权登录才能进行下一步操作' })
      } else {
        const wxUsersPostActionRes = await this.$store.dispatch('public/wxUsers/postAction', {
          body: {
            type: 'LOGIN',
            code: loginRes.code,
            iv,
            encryptedData,
            loginRes
          }
        })
        const { wxUser, token } = wxUsersPostActionRes.data
        const url = this.$mp.query.from
          ? '/' + utils.url.decode(this.$mp.query.from)
          : '/pages/home/index'

        this.$auth.login({ user: wxUser, token })
        this.$wx.navigateTo({ url })
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

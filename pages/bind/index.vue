<template>
  <scroll-view class="p-bind">
    <CLogo />
    <p class="pb-tip c4 fs24">请绑定手机号，以便为您提供更好的服务。</p>
    <div class="pb-telephone-input c-input">
      <input
        class="c2 fs28"
        placeholder-class="c6"
        type="number"
        placeholder="请输入手机号"
        maxlength="11"
        cursor-spacing="210rpx"
        v-model.lazy="cForm.data.telephone" />
    </div>
    <div class="pb-check-code-input c-input">
      <input
        class="c2 fs28"
        placeholder-class="c6"
        type="number"
        placeholder="请输入验证码"
        maxlength="6"
        cursor-spacing="210rpx"
        v-model.lazy="cForm.data.checkCode" />
      <div
        :class="[ 'pb-check-code', 'fs28', { 'is-disabled': cCheckCode.disabled } ]"
        @click="handleGetCheckCode">
        {{ cCheckCode.message }}
      </div>
    </div>
    <button
      class="c-button c-button--1 bgc3 c1 fs32"
      style="width: 640rpx;"
      @click="handleConfirm">
      确定
    </button>
  </scroll-view>
</template>

<script>
import CLogo from '@/components/logo'

export default {
  components: {
    CLogo
  },
  data () {
    return {
      cForm: {
        data: {}
      },
      cCheckCode: {
        disabled: false,
        message: '获取验证码'
      }
    }
  },
  methods: {
    getCheckCode (telephone) {
      return this.$store.dispatch('wx/wxUsers/postAction', {
        body: {
          type: 'GET_CHECK_CODE',
          telephone
        }
      })
    },
    async handleGetCheckCode () {
      if (this.cCheckCode.disabled) return

      const { telephone } = this.cForm.data

      if (!telephone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(telephone)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      await this.getCheckCode(telephone)

      this.$wx.showToast({ title: '验证码获取成功' })

      let i = 0
      let leftSeconds = 120

      this.cCheckCode.disabled = true
      this.cCheckCode.message = `${leftSeconds} 秒后重新获取`

      this.timer = setInterval(() => {
        this.cCheckCode.message = `${leftSeconds - ++i} 秒后重新获取`

        if (leftSeconds === i) {
          clearInterval(this.timer)

          this.cCheckCode.disabled = false
          this.cCheckCode.message = '获取验证码'
        }
      }, 1000)
    },
    async handleConfirm () {
      const { telephone, checkCode } = this.cForm.data

      if (!telephone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(telephone)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      if (!checkCode) {
        this.$wx.showToast({ title: '验证码不能为空' })
        return
      }

      if (checkCode.length < 6) {
        this.$wx.showToast({ title: '验证码格式错误' })
        return
      }

      await this.$store.dispatch('wx/wxUsers/postAction', {
        body: {
          type: 'BIND_TELEPHONE',
          telephone,
          checkCode
        }
      })

      this.$wx.showToast({ title: '绑定成功' })

      this.$wx.navigateTo({
        url: ''
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

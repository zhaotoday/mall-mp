<template>
  <div class="p-bind">
    <div class="b-list c-list bgc1 fs30">
      <div class="c-list__item">
        <input
          class="c-list__input is-full c2 fs32"
          placeholder-class="c19"
          placeholder="请输入要绑定的手机号"
          v-model="cForm.mobilePhone" />
        <div
          :class="[ 'pb-check-code', 'fs28', { 'is-disabled': cCheckCode.disabled } ]"
          @click="handleGetCheckCode">
          {{ cCheckCode.message }}
        </div>
      </div>
      <div class="c-list__item">
        <input
          class="c-list__input is-full c2 fs32"
          type="number"
          placeholder-class="c19"
          placeholder="请输入验证码"
          maxlength="6"
          v-model="cForm.checkCode" />
      </div>
    </div>
    <button
      class="c-button w626 h86 bg1 c1 fs34"
      @click="handleConfirm">
      确定
    </button>
  </div>
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

      const { telephone } = this.cForm

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
      const { telephone, checkCode } = this.cForm

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

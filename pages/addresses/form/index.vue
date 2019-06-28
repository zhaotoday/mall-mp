<template>
  <div class="p-addresses-form">
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        收货人
        <input
          class="c-list__value fs32"
          placeholder-class="c15"
          placeholder="收货人姓名"
          v-model="cForm.name" />
        <ul class="b-genders">
          <li
            v-for="item in $consts.GENDERS"
            :key="item.value"
            :class="[ 'c-tag h50', cForm.gender === item.value ? 'bdc5 c5': 'bdc14 c14', 'fs26' ]"
            @click="changeTag('gender', item)">
            {{ item.label }}
          </li>
        </ul>
      </li>
      <li class="c-list__item">
        手机号
        <input
          class="c-list__value fs32"
          placeholder-class="c15"
          placeholder="配送员联系您的手机号"
          v-model="cForm.phoneNumber" />
      </li>
      <li class="c-list__item is-link">
        小区
        <input
          class="c-list__value fs32"
          placeholder-class="c15"
          placeholder="小区/写字楼等"
          v-model="cForm.address" />
      </li>
      <li class="c-list__item">
        门牌号
        <input
          class="c-list__value fs32"
          placeholder-class="c15"
          placeholder="门牌号，如：1 号楼 102"
          v-model="cForm.room" />
      </li>
      <li class="c-list__item">
        地址分类
        <ul class="b-types">
          <li
            v-for="item in $consts.ADDRESS_TAGS"
            :key="item.value"
            :class="[ 'c-tag h50', cForm.tag === item.value ? 'bdc5 c5' : 'bdc14 c14', 'fs26' ]"
            @click="changeTag('tag', item)">
            {{ item.label }}
          </li>
        </ul>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="save">
      保存
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cForm: {
        name: '',
        gender: '1',
        phoneNumber: '',
        address: '',
        room: '',
        tag: '1'
      }
    }
  },
  onShow () {
    this.$wx.setNavigationBarTitle({ title: '新增地址' })
  },
  methods: {
    changeTag (key, item) {
      this.cForm[key] = item.value
    },
    async save () {
      const PHONE_REG = /^1\d{2}\s?\d{4}\s?\d{4}$/
      const { name, phoneNumber, address } = this.cForm

      if (!name.trim()) {
        this.$wx.showToast({ title: '请填写收货人' })
        return
      }

      if (!phoneNumber.trim()) {
        this.$wx.showToast({ title: '请填写手机号' })
        return
      }

      if (!PHONE_REG.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      if (!address.trim()) {
        this.$wx.showToast({ title: '请填写小区' })
        return
      }

      await this.$store.dispatch('wx/addresses/post', {
        showLoading: true,
        body: this.cForm
      })

      this.$wx.showToast({ title: '新增成功' })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

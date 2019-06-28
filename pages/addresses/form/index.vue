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
        <div class="b-gender">
          <div class="c-tag h50 bdc5 c5 fs26">先生</div>
          <div class="c-tag h50 bdc5 c5 fs26">女士</div>
        </div>
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
            @click="changeAddressTag(item)">
            {{ item.label }}
          </li>
        </ul>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="handleSave">
      保存
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cForm: {
        tag: '1'
      }
    }
  },
  onShow () {
    this.$wx.setNavigationBarTitle({ title: '新增地址' })
  },
  methods: {
    handleSave () {},
    changeAddressTag (item) {
      this.cForm.tag = item.value
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

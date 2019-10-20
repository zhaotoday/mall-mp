<template>
  <div class="p-join c-comment">
    <h2 class="c-comment__title fs30">商家名称</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入商家名称"
      v-model="cForm.name"
    />
    <h2 class="c-comment__title fs30">联系人</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入联系人"
      v-model="cForm.contactName"
    />
    <h2 class="c-comment__title fs30">手机号</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入手机号"
      v-model="cForm.phoneNumber"
    />
    <h2 class="c-comment__title fs30">备注</h2>
    <textarea
      class="c-comment__textarea fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入备注"
      v-model="cForm.remark">
    </textarea>
    <button
      class="c-button is-foot w670 h76 bgc4 c1 fs32"
      @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

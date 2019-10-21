<template>
  <div class="p-join c-comment">
    <h2 class="c-comment__title fs28">商家名称</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入商家名称"
      v-model="cForm.name"
    />
    <h2 class="c-comment__title fs28">店铺照片</h2>
    <div
      v-if="!cForm.picture"
      class="c-comment__upload bgc1"
      @click="chooseImage()">
    </div>
    <div
      v-else
      class="c-comment__upload-file bgc1">
      <img :src="$helpers.getImageById(this.cForm.picture)" />
      <i
        class="c-icon c-icon--close"
        @click="delImage">
      </i>
    </div>
    <h2 class="c-comment__title fs28">联系人</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入联系人"
      v-model="cForm.contactName"
    />
    <h2 class="c-comment__title fs28">手机号</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入手机号"
      v-model="cForm.phoneNumber"
    />
    <h2 class="c-comment__title fs28">收货地址</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入收货地址"
      v-model="cForm.address"
    />
    <h2 class="c-comment__title fs28">送货时间</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入送货时间"
      v-model="cForm.deliveryTime"
    />
    <h2 class="c-comment__title fs28">员工代码</h2>
    <input
      class="c-comment__input fs26 bgc1"
      placholder-class="c9"
      placeholder="请输入员工代码"
      v-model="cForm.staffNo"
    />
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
